import os
import json
import boto3
from urllib import request, parse
from botocore.exceptions import ClientError
phone_number_id = os.environ['PHONE_NUMBER_ID']
secret_name = os.environ['SECRET_NAME']
verify_token = os.environ['VERIFY_TOKEN']
def handler(event,context):
  print(event)
  if event['httpMethod'] == "GET":
    # GET method expects the HubChallenge and validates the Verify Token received with the one in the System Variable. If they match, it returns the HubChallenge
    HubVerifyToken = event['queryStringParameters']['hub.verify_token']
    if HubVerifyToken == verify_token:
      HubChallenge = event['queryStringParameters']['hub.challenge']
      response = {
          "statusCode": 200,
          "body": HubChallenge
      }
    else:
      response = {
          "statusCode": 400,
          "Message": "Unauthorized access"
      }
  elif event['httpMethod'] == "POST":
    # POST method expects the message(s)
    body = json.loads(event['body'])
    entries = body['entry']
    for entry in entries:
      changes = entry['changes']
      for change in changes:
        print(change)
        try:
          messages = change['value']['messages']
        except:
          try:
            business_initiated = change['value']['statuses'][0]['conversation']['origin']['type']
            print("Message type: " + business_initiated)
          except:
            print("Not a recognised message!")
        else:
          for message in messages:
            # Looping through messages and extracting the message body, from number and timestamp
            messag_body = message['text']['body']
            from_number = message['from']
            timestamp = message['timestamp']
            message_id = message['id']
            print("Message received at: " + timestamp)
            print("From: " + from_number)
            print("Message: " + messag_body)
            # Do something with the inbound message
            # Mark message as read
            message_read(message_id)
          
    response = {
      "statusCode": 200,
      "Message": "Message accepted"
    }
  else:
    response = {
      "statusCode": 403,
      "Message": "Request not recognised"
    }        
  return response
def message_read(message_id):
  session = boto3.session.Session()
  client = session.client(service_name='secretsmanager')
  try:
    get_secret_value_response = client.get_secret_value(SecretId=secret_name)
  except ClientError as e:
    raise e
  else:
    secret = get_secret_value_response['SecretString']
    url = 'https://graph.facebook.com/v15.0/'+ phone_number_id + '/messages'
    headers = {
        'content-type': 'application/json',
        'Authorization': secret
    }
    data = parse.urlencode({
        'messaging_product': 'whatsapp',
        'status': 'read',
        'message_id': message_id,
    }).encode()
    req =  request.Request(url, data=data, headers=headers)
    resp = request.urlopen(req)
  return(resp)
