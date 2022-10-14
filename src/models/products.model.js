const connection = require('./connection');

const modelGetAll = async () => {
  const [results] = await connection.execute(
    'SELECT * FROM  StoreManager.products',
  );
  return results;
};

const procuraIdModel = async (id) => {
  const [[results]] = await connection.execute(
    'SELECT * FROM  StoreManager.products WHERE id= ?',
    [id],
  );
  console.log(results);
  return results;
};

// Requisito 3 certo
const insertProducts = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product.name],
  );

  return insertId;
};

/* // Requisito 10
const atualizaProductsModel = async (product) => {
  const { checkId } = await connection.execute(
    'UPDATE products WHERE StoreManager.products AND id',
    [product.id],
  );
}; */

// Requisito 12 
const deletaProductModel = async (product) => {
  const [results] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
  [product.id],
  );
  return results;
};

module.exports = {
  modelGetAll,
  procuraIdModel,
  insertProducts,
  /* atualizaProductsModel, */
  deletaProductModel,
};
