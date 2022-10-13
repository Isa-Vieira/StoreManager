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
    [id]
  );
  console.log(results)
  return results;
};

/* // Requisito 3
const cadastraProdutosModel = async () => {
  s
}; */

module.exports = {
  modelGetAll,
  procuraIdModel,
};
