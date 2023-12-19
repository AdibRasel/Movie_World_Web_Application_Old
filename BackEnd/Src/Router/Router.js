const express =require('express');
const UserController = require('../controller/UserController/UserController');

const Router =express.Router();


// User Register
Router.get("/UserRegister", UserController.UserRegister);




module.exports=Router