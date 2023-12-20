const express =require('express');
const SuperAdminController = require('../controller/SuperAdminController/SuperAdminController');
const OfficeController = require('../controller/OfficeController/OfficeController');
const UserController = require('../controller/UserController/UserController');
const MenuController = require("../Controller/MenuController/MenuController");
const DashBoardController = require("../Controller/DashBoardController/DashBoardController")

const Router =express.Router();


// Super Admin Register
Router.post("/SuperAdminRegister", SuperAdminController.SuperAdminRegister);
// Super Admin Login
Router.post("/SuperAdminLogin", SuperAdminController.SuperAdminLogin);



// Office Register
Router.post("/OfficeRegister", OfficeController.OfficeRegister);
// Office Register
Router.post("/OfficeLogin", OfficeController.OfficeLogin);



// User Register
Router.post("/UserRegister", UserController.UserRegister);
// User Login
Router.post("/UserLogin", UserController.UserLogin);



// Menu Create 
Router.post("/MenuCreate", MenuController.MenuCreate)

// DashBoard Create
Router.post("/DashBoardCreate", DashBoardController.DashBoardCreate)


module.exports=Router