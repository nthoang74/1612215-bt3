const express = require('express');
const homeController = require('../controllers/home.controllers.js')

const indexRouter = express.Router();

indexRouter.get('/', homeController);

module.exports = indexRouter


