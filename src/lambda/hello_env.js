const { AWS_EXECUTION_ENV } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "AWS Runtime: " + AWS_EXECUTION_ENV
  };
};
