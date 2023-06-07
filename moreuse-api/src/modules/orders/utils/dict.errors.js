const dictErrors = {
  SERVER_ERROR: {
    status: 500,
    message: 'internal server error'
  },
  ORDER_NOT_FOUND: {
    status: 404,
    message: 'Order not found'
  },
  CLOTHE_NOT_AVAILABLE: {
    status: 404,
    message: 'Clothe not available for sale'
  },
  SELLER_EQUAL_BUYER: {
    status: 404,
    message: 'The buyer and the seller of the clothe are the same'
  }
}

module.exports = dictErrors;
