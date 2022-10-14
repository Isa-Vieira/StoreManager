const express = require('express');
const controllerGetSales = require('../controllers/sales.controller');

const salestRouter = express.Router();

salestRouter.get('/', controllerGetSales.controllerGetAllSales);

salestRouter.get('/:id', controllerGetSales.idControllerSales);
module.exports = salestRouter;