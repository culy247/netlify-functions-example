exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, " + $AWS_LAMBDA_JS_RUNTIME + "!"
  });
};
