let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

    const firstNumber = Number(event.queryStringParameters.number1);
    const secondNumber = Number(event.queryStringParameters.number2);
    const result = firstNumber + secondNumber;

    var responseBody = {
        "result": result
    };

    console.log('Request : ' + firstNumber + ' + ' + secondNumber + ' and innovfest Result = ' + result);

    var response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    callback(null, response);
}