const orderService = require('./orders.service');
const clotheService = require('../clothes/clothes.service');
const {SERVER_ERROR, ORDER_NOT_FOUND, CLOTHE_NOT_AVAILABLE, SELLER_EQUAL_BUYER} = require('./utils/dict.errors');

const CLOTHE_STATUS = {
  AVAILIBLE: 1,
  SOLD: 2
};

//endpoint add
const add = async (req, res) => {
  try {
    const order = req.body;
    const buyerId = req.payLoad.userId;
    const commissionPercentaje = process.env.COMMISSION_PERCENTAJE;
    //const objId = new ObjectId(buyerId);

    //get data from the clothe
    const clotheResponse = await clotheService.getById(order.clotheId);

    const clotheStatus = clotheResponse.clothe.status;

    if (clotheStatus == CLOTHE_STATUS.AVAILIBLE ) {
      order.sellerId = clotheResponse.clothe.sellerId;

      if (String(buyerId) !== clotheResponse.clothe.sellerId.toString()) {
        order.price = clotheResponse.clothe.price;
        order.commission = (order.price * commissionPercentaje);

        const response = await orderService.add(order, buyerId);

        const clotheResponse2 = await clotheService.changeStatus(order.clotheId, CLOTHE_STATUS.SOLD);
        res.status(200).json(response);
      } else {
        res.status(SELLER_EQUAL_BUYER.status).json(SELLER_EQUAL_BUYER);
      }
    } else {
      //throw errorHandler(CLOTHE_NOT_AVAILABLE);
      res.status(CLOTHE_NOT_AVAILABLE.status).json(CLOTHE_NOT_AVAILABLE);
    }

  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint getById
const getById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const response = await orderService.getById(orderId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getMySales = async (req, res) => {
  try {
    const sellerId = req.payLoad.userId;

    const response = await orderService.getMySales(sellerId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getMyShopping = async (req, res) => {
  try {
    const buyerId = req.payLoad.userId;
    const response = await orderService.getMyShopping(buyerId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}


//endpoint changeStatus
const changeStatus = async (req, res) => {
  try {
    const statusId = req.query.statusId;
    const orderId = req.params.id;
    const response = await ordersService.changeStatus(orderId, statusId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

module.exports = {
  add,
  getById,
  getMySales,
  getMyShopping,
  changeStatus
}
