const errorMessages = require('../helpers/errorMessages');
const statusCode = require('../helpers/statusCode');
const modelSales = require('../models/sales.model');

const serviceSalesGetAll = async () => {
  const result = await modelSales.modelSalesGetAll();

  if (result.length > 0) {
    return { message: result, status: statusCode.OK };
  }

  return {
    message: errorMessages.notFundData,
    status: statusCode.BadRequest,
  };
};

const idSalesService = async (id) => {
  const result = await modelSales.procuraIdSalesModel(id);
   if (result && result.length > 0) {
     return { message: result, status: statusCode.OK };
  }
  return {
    message: null, status: statusCode.notFound,
  };
};

module.exports = {
  serviceSalesGetAll,
  idSalesService,
};