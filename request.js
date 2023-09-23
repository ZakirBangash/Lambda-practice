module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Zakir, You are accessing second api of request",
        input: event,
      },
      null,
      2
    ),
  };
};
