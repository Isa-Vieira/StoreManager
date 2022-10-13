const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { mockProducts } = require("../mock/products.mock");

describe('Teste Model de Products', function () {
  describe('Listar todos os produtos', function () {

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([mockProducts]);
    });
    it('Tem que retornar um array com todos os elementos', async function () {
      const result = await productsModel.modelGetAll();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(mockProducts);
  })
    afterEach(() => {
      sinon.restore();
    })
  });
});