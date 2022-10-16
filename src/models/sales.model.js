const connection = require('./connection');

const modelSalesGetAll = async () => {
  const [results] = await connection.execute(
  `SELECT salesProducts.sale_id As saleId,
  salesProducts.product_id As productId,
  sales.date,
  salesProducts.quantity
  FROM StoreManager.sales_products AS salesProducts
  INNER JOIN StoreManager.sales AS sales
  ON salesProducts.sale_id = sales.id
  ORDER BY salesProducts.sale_id, salesProducts.product_id`,
    
  );
  return results;
};

const procuraIdSalesModel = async (id) => {
  const [results] = await connection.execute(
    `SELECT
  salesProducts.product_id As productId,
  sales.date,
  salesProducts.quantity
  FROM StoreManager.sales_products AS salesProducts
  INNER JOIN StoreManager.sales AS sales 
  ON salesProducts.sale_id = sales.id
  WHERE salesProducts.sale_id = ?
  ORDER BY salesProducts.sale_id, salesProducts.product_id`,
    [id],
  );
  console.log('results', results);
  return results;
};
module.exports = {
  modelSalesGetAll,
  procuraIdSalesModel,
};