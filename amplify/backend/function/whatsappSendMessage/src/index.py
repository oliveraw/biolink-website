import os
import sys
import json
import boto3
from urllib.error import HTTPError, URLError
from urllib import request, parse
from botocore.exceptions import ClientError

phone_number_id = os.environ['PHONE_NUMBER_ID']
secret_name = os.environ['SECRET_NAME']

CREATE_TEMPLATE = 'biolink_patient_enrolled'
UPDATE_TEMPLATE = 'biolink_patient_update'
BASE_PATIENTS_URL = 'https://www.biolinkanalytics.com/patients/'

def create_patient_payload(language_code, to_number, patient_name, patient_url):
    return {
        'messaging_product': 'whatsapp',
        'to': to_number,
        'type': 'template',
        'template': {
            'name': CREATE_TEMPLATE,
            'language': {
                'code': language_code
            },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                      {
                        "type": "text",
                        "text": patient_name,
                      },
                      {
                        "type": "text",
                        "text": patient_url,
                      }
                    ]
                }
            ]
        }
    }
    
def update_patient_payload(language_code, to_number, patient_name, patient_url):
    return {
        'messaging_product': 'whatsapp',
        'to': to_number,
        'type': 'template',
        'template': {
            'name': UPDATE_TEMPLATE,
            'language': {
                'code': language_code
            },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                      {
                        "type": "text",
                        "text": patient_name,
                      },
                      {
                        "type": "text",
                        "text": patient_url,
                      }
                    ]
                }
            ]
        }
    }

def handler(event, context):
    print("Received event: {}".format(event))
    session = boto3.session.Session()
    client = session.client(service_name='secretsmanager')
    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
    except ClientError as e:
        raise e
    else:
        url = 'https://graph.facebook.com/v17.0/'+ phone_number_id + '/messages'
        secret = get_secret_value_response['SecretString']
        headers = {
            'content-type': 'application/json',
            'Authorization': secret
        }
        
        
        for record in event['Records']:
            print("processing record", record)
            
            if record["eventName"] == "REMOVE":
                print("not configured to handle removes yet")
                return
            
            data = record["dynamodb"]
            patient_name = data["NewImage"]["name"]["S"]
            language_code = data["NewImage"]["languageCode"]["S"]
            to_number = data["NewImage"]["phone"]["S"]
            patient_url = BASE_PATIENTS_URL + data["NewImage"]["id"]["S"]
            
            if record["eventName"] == "INSERT":
                return send_message(url, headers, create_patient_payload(language_code, to_number, patient_name, patient_url))
            elif record["eventName"] == "MODIFY":
                # return send_message(url, headers, update_patient_payload(language_code, to_number, patient_name, patient_url))
                print("event.eventName was MODIFY")
                return
            else:
                print("event.eventName was not INSERT, MODIFY, or REMOVE")
                return
        
        # from generated amazon pinpoint stuff
        # message = event['Data'] # Obtaining the message from the Custom Data field
        # for key in event['Endpoints'].keys(): 
        #     to_number = str(event['Endpoints'][key]['Address'])
        #     send_message(secret, to_number, url, message_template)
    
        
def send_message(url, headers, data):
    print(data)
    data = json.dumps(data).encode()

    try:
        req =  request.Request(url, data=data, headers=headers)
        with request.urlopen(req, timeout=10) as response:
            print(response.status)
            return response.read()
    except HTTPError as error:
        print(error.status, error.reason)
    except URLError as error:
        print(error.reason)
    except TimeoutError:
        print("Request timed out")