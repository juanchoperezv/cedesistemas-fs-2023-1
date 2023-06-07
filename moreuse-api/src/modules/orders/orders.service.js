const errorHandler = require('../../utils/errorHandler');
const {SERVER_ERROR, ORDER_NOT_FOUND} = require('./utils/dict.errors');
const  Order = require('./models/order.model');

const ORDER_STATUS = {
  GENERATED: 1,
  PAID: 2,
  CANCELED: 3
};

const ORDER_PAYMENT_TYPE = {
  CASH: 1,
  CREDIT_CARD: 2,
  TRANSFER: 3
};

const add = async (orderData, buyerId) => {
  try {

    orderData.buyerId = buyerId;
    const order = Order(orderData);

    await order.save();
    return {
      message: 'order created',
      order: order
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getById = async (orderId) => {
  try {
    const order = await Order.findById(orderId);
    if (order) {
      return {
        order
      };
    }
    throw errorHandler(ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getMySales = async (userId) => {
  try {
    const query = {
      sellerId: userId,
      status: {$ne: ORDER_STATUS.CANCELED}
    };

    const orders = await Order.find(query);
    if (orders) {
      return {
        orders
      };
    }
    throw errorHandler(ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getMyShopping = async (buyerId) => {
  try {
    const query = {
      buyerId: buyerId,
      status: {$ne: ORDER_STATUS.CANCELED}
    };

    const orders = await Order.find(query);
    if (orders) {
      return {
        orders
      };
    }
    throw errorHandler(ORDER_NOT_FOUND);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const changeStatus = async (orderId, statusId) => {
  try {
    const where = {_id: orderId};
    const setChanges = {
      $set: {status: statusId}
    };

    const result = await Order.updateOne(where, setChanges);

    return {
      result
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};


module.exports = {
  add,
  getById,
  getMySales,
  getMyShopping,
  changeStatus
}
