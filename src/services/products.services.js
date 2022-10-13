const { productsModel } = require('../models');
const errorMessages = require('../helpers/errorMessages');
const statusCode = require('../helpers/statusCode');

const serviceGetAll = async () => {
  const result = await productsModel.modelGetAll();

  if (result.length > 0) {
    return { message: result, status: statusCode.OK };
  }

  return {
    message: errorMessages.notFundData,
    status: statusCode.BadRequest,
  };
};

const idService = async (id) => {
  const result = await productsModel.procuraIdModel(id);
   if (result) {
     return { message: result, status: statusCode.OK };
  }

  return {
    message: result, status: statusCode.notFound,
  };
};

module.exports = {
  serviceGetAll,
  idService,
};