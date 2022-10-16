const productsService = require('../services/products.services');

const controllerGetAll = async (_req, res) => {
  const result = await productsService.serviceGetAll();
  res.status(result.status).json(result.message);
};

const idController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.idService(id);
  const obj = result.message ? { id: Number(id), name: result.message.name }
    : { message: 'Product not found' };
  res.status(result.status).json(obj);
};

// Requisito 3
const createProducts = async (req, res) => {
  const { name } = req.body;

  const recebeNewProducts = await productsService.createProductsService(name);
  return res.status(201).json(recebeNewProducts);
};

// Requisito 10
const atualizaProductsId = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const objetoIdEName = { id, name };
  const result = await productsService.atualizaProductsIdService(objetoIdEName);
  
  if (result.status === 404) {
    return res.status(result.status).json({ message: 'Product not found' });
  }
   return res.status(result.status).json(result.message);
  };

// Requisito 12
const deletaProductController = async (req, res) => {
  const { id } = req.params;
  const pegaStatusEMessage = await productsService.deletaProductService(id);
  if (pegaStatusEMessage.message) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(pegaStatusEMessage.status).end();
};
module.exports = {
  controllerGetAll,
  idController,
  createProducts,
  atualizaProductsId,
  deletaProductController,
};