const express = require('express');
const router = express.Router();
const ordersController = require('./orders.controllers');
const authVerify = require('../../middleware/authVerify');

// authVerify middleware que ejecuta la verificacion de token y lanza el metodo del controlador

//definicion de las rutas y la funcion que lo controlara
router.post("/add", authVerify, ordersController.add);
router.get("/detail/:id", authVerify, ordersController.getById);
router.get("/sales", authVerify, ordersController.getMySales);
router.get("/shopping", authVerify, ordersController.getMyShopping);


module.exports = router;
