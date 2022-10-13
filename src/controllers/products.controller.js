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
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
   return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  const recebeNewProducts = await productsService.createProductsService(name);
  return res.status(201).json(recebeNewProducts);
};

module.exports = {
  controllerGetAll,
  idController,
  createProducts,
};