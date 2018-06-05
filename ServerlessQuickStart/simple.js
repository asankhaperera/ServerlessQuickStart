let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	const result = event.number1 + event.number2;

	callback(null,result);
}