const express = require('express');
const productController = require('../controllers/products.controller');
/* const connection = require('../models/connection'); */

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.idController);

productRouter.post('/', productController.createProducts);

productRouter.post('/:id', productController.atualizaProductsId);

productRouter.delete('/:id', productController.deletaProductController);

productRouter.put('/:id', productController.atualizaProductsId);

module.exports = {
  productRouter,
};