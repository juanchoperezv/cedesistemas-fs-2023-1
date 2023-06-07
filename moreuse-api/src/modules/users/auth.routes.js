const express = require('express');
const authController = require('./auth.controller');
const authVerify = require('../../middleware/authVerify');
const router = express.Router();

//definicion de las rutas y la funcion que lo controlara
router.post("/login", authController.login);
router.post("/logout", authVerify,authController.logout);
router.post("/signup", authController.signup);
router.get("/", authVerify, authController.info);

module.exports = router;
