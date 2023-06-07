const errorHandler = require('../../utils/errorHandler');
const {SERVER_ERROR, CLOTHE_NOT_FOUND} = require('./utils/dict.errors');
const  Clothe = require('./models/clothe.model');

const CLOTHE_STATUS = {
  AVAILIBLE: 1,
  SOLD: 2
};

const add = async (clotheData, sellerId) => {
  try {

    clotheData.sellerId = sellerId;
    const clothe = Clothe(clotheData);


    await clothe.save();
    return {
      message: 'prenda creada',
      clothe: clothe
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getAll = async (filter) => {
  try {
    const query = {
      status: CLOTHE_STATUS.AVAILIBLE
    };
    if (filter.gender) {
      query.gender = filter.gender;
    }
    if (filter.target) {
      query.target = filter.target;
    }
    if (filter.minPrice && filter.maxPrice) {
      query.price = {$gte: filter.minPrice, $lte: filter.maxPrice};
    }

    //like no sencitivo
    if (filter.name) {
      query.name = {$regex: filter.name, $options: "i"};
    }

    if (filter.excludeSeller) {
      query.sellerId = {$ne: filter.excludeSeller };
    }

    const clothes = await Clothe.find(query);

    return {
      clothes
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getById = async (clotheId) => {
  try {
    const clothe = await Clothe.findById(clotheId);
    if (clothe) {
      return {
        clothe
      };
    }
    throw errorHandler(CLOTHE_NOT_FOUND);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const getMyStuff = async (userId) => {
  try {
    const query = {
      sellerId: userId
    };
    const clothe = await Clothe.find(query);
    if (clothe) {
      return {
        clothe
      };
    }
    throw errorHandler(CLOTHE_NOT_FOUND);
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};

const changeStatus = async (clotheId, statusId) => {
  try {
    const where = {_id: clotheId};
    const setChanges = {
      $set: {status: statusId}
    };

    const result = await Clothe.updateOne(where, setChanges);

    return {
      result
    };
  } catch (error) {
    throw error.handled? error :  errorHandler(SERVER_ERROR, error);
  }
};


module.exports = {
  add,
  getAll,
  getById,
  changeStatus,
  getMyStuff
}
