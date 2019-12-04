const { AWS_LAMBDA_JS_RUNTIME } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Runtime: " + AWS_LAMBDA_JS_RUNTIME
  };
};
