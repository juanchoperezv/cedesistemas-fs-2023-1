const errorHandler = (errorData, extra = {}) => {
  const response = {... extra, messagge: errorData.message};
  return {
    status: errorData.status,
    response: response,
    handled: true
  };
}

module.exports = errorHandler;
