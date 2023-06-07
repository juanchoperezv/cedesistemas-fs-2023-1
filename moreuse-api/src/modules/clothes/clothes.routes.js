const express = require('express');
const router = express.Router();
const clothesController = require('./clothes.controller');
const authVerify = require('../../middleware/authVerify');
const authOptional = require('../../middleware/authOptional');
// authVerify middleware que ejecuta la verificacion de token y lanza el metodo del controlador

//definicion de las rutas y la funcion que lo controlara
router.post("/add", authVerify, clothesController.add);
router.get("/detail/:id", clothesController.getById);
router.get("/mystuff", authVerify, clothesController.getMyStuff);
router.get("/", authOptional , authVerify, clothesController.getAll);
router.patch("/chageStatus/:id", clothesController.changeStatus);
//router.put("/:id", authVerify, clothesController.update);

module.exports = router;
