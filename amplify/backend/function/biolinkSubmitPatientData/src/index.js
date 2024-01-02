const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const body = JSON.parse(event.body)

    // should validate inputs here and not put null in the database
    // that way create and update can just be the same route but you just send whatever info you want to change

    const recordToPut = {
        TableName: process.env.STORAGE_LEARNAMPLIFYSTORAGE_NAME,
        Item: {
            uid: body.patientData.uid,
            name: body.patientData.name,
            phone: body.patientData.phone,
            email: body.patientData.email,
            sex: body.patientData.sex,
            race: body.patientData.race,
            birthday: body.patientData.birthday,
            psa1: body.patientData.psa1,
            psa2: body.patientData.psa2,
        }
    }
    
    try {
        await docClient.put(recordToPut).promise();
        return {
            statusCode: 201,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(`Patient data successfully saved for ${body.patientData.uid}`),
        }
    } catch (err) {
        console.log(`ERROR: ${JSON.stringify(err)}`)
        return { error: err }
    }
};
