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

module.exports = {
  modelGetAll,
  procuraIdModel,
  insertProducts,
};
