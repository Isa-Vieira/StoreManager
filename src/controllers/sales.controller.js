const serviceSales = require('../services/sales.services');

const controllerGetAllSales = async (_req, res) => {
  const result = await serviceSales.serviceSalesGetAll();
  res.status(result.status).json(result.message);
};

const idControllerSales = async (req, res) => {
  const { id } = req.params;
  const result = await serviceSales.idSalesService(id);
  const obj = result.message ? result.message
    : { message: 'Sale not found' };
  console.log(result);
  res.status(result.status).json(obj);
};

module.exports = {
  controllerGetAllSales,
  idControllerSales,
};