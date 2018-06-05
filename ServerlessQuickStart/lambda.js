let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
    
	const firstNumber = Number(event.queryStringParameters.number1); 
    const secondNumber = Number(event.queryStringParameters.number2); 
    const result = firstNumber + secondNumber; 

    var responseBody = { 
        "result": result 
    }; 

    console.log('Request : ' + firstNumber + ' + ' + secondNumber + ' and Result = ' + result);

    var response = { 
        "statusCode": 200, 
        "body": JSON.stringify(responseBody), 
        "isBase64Encoded": false 
    }; 

    callback(null, response); 
}