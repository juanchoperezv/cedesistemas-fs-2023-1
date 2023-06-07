const dictErrors = {
  USER_PASS_WRONG: {
    status: 404,
    message: 'User or Password wrong'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'internal server error'
  },
  USER_ALREADY_EXISTS: {
    status: 404,
    message: 'User allready exists'
  },
  USER_NOT_FOUND: {
    status: 404,
    message: 'User not found'
  }
}

module.exports = dictErrors;
