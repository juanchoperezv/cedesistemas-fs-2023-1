const clothesService = require('./clothes.service');

//endpoint add
const add = async (req, res) => {
  try {
    const clothe = req.body;
    const userId = req.payLoad.userId;
    const response = await clothesService.add(clothe, userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint geAll
const getAll = async (req, res) => {
  try {
    const filters = req.query;

    //verifica que el obketo si tenga el atributo sin que se rompa el codigo
    //para excluir las prendas del usuario actual
    if (req.payLoad?.userId) {
      filters.excludeSeller = req.payLoad.userId;
    }

    const response = await clothesService.getAll(filters);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint getById
const getById = async (req, res) => {
  try {
    const clotheId = req.params.id;
    const response = await clothesService.getById(clotheId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getMyStuff = async (req, res) => {
  try {
    const userId = req.payLoad.userId;
    const response = await clothesService.getMyStuff(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

//endpoint update
// const update = async (req, res) => {
//   try {
//     const user = req.body;
//     const response = await authService.signup(user);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(error.status).json(error.response);
//   }
// }


//endpoint changeStatus
const changeStatus = async (req, res) => {
  try {
    const statusId = req.query.statusId;
    const clotheId = req.params.id;
    const response = await clothesService.changeStatus(clotheId, statusId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

module.exports = {
  add,
  getAll,
  getById,
  //update,
  changeStatus,
  getMyStuff
}
