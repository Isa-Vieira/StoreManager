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

// Requisito 3
const createProductsService = async (name) => {
  const newProductsId = await productsModel.insertProducts({ name });
  const newProducts = await productsModel.procuraIdModel(newProductsId);

  return newProducts;
};

// Requisito 10
const atualizaProductsIdService = async (product) => {
  const { id } = product;

  const pegaId = await productsModel.procuraIdModel(id);
  if (pegaId) {
    await productsModel.atualizaProductsModel(product);
    return { message: product, status: 200 };
}
  return { message: 'Product not found', status: 404 };
};

// Requisito 12
const deletaProductService = async (products) => {
  const productsAtualizados = await productsModel.procuraIdModel(products);
  
  if (productsAtualizados) {
     await productsModel.deletaProductModel(productsAtualizados);
    return { status: 204 };
  } 
  return { status: 404, message: 'Product not found' };
};

module.exports = {
  serviceGetAll,
  idService,
  createProductsService,
  atualizaProductsIdService,
  deletaProductService,
};