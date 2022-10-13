const express = require('express');
const productController = require('../controllers/products.controller');
/* const connection = require('../models/connection'); */

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.idController);

productRouter.post('/', productController.createProducts);

module.exports = {
  productRouter,
};