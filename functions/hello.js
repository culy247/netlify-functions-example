exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello there!"
  });
  console.log("yup" + process.env.AWS_EXECUTION_ENV)
};
