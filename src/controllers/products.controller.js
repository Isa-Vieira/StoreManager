const productsService = require('../services/products.services');

const controllerGetAll = async (_req, res) => {
  const result = await productsService.serviceGetAll();
  res.status(result.status).json(result.message);
};

const idController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.idService(id);
  const obj = result.message ? {id: Number(id), name:result.message.name} : { "message": "Product not found" }
  res.status(result.status).json(obj);
}
module.exports = {
  controllerGetAll,
  idController,
};