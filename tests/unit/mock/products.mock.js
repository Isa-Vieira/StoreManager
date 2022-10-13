const mockProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  }
];

const returnService = {
  status: 200,
   message: mockProducts,
};
const mockvazia = {
   
 }

const mockCadastraProdutos = {
  "name": "ProdutoX"
}
 
module.exports = {
  mockProducts,
  returnService,
  mockvazia,
  mockCadastraProdutos,
}
