const express = require('express');
const productController = require('../controllers/products.controller');
const { validaName } = require('../middlewares/validaName');
/* const connection = require('../models/connection'); */

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.idController);

productRouter.post('/', validaName, productController.createProducts);

productRouter.delete('/:id', productController.deletaProductController);

productRouter.put('/:id', validaName, productController.atualizaProductsId);

module.exports = {
  productRouter,
};