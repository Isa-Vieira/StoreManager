const { expect } = require("chai");
const { object } = require("joi");
const sinon = require("sinon");
const connection = require('../../../src/models/connection')

const { productsModel } = require('../../../src/models');
const productsService = require('../../../src/services/products.services');
const { mockProducts, mockvazia } = require("../mock/products.mock");

describe('Teste Product Service', function () {
  describe('Listando produtos', function () {
  
    it("Caso de sucesso, model retorna um array com todos os elementos", async function () {
      sinon.stub(productsModel, 'modelGetAll').resolves(mockProducts);
      const result = await productsService.serviceGetAll();

      expect(result.message).to.be.a("array");
      expect(result.message).to.be.eq(mockProducts);
    });

    afterEach(() => {
      sinon.restore();
    });

    /* it("Caso de falha, model retorna um array com todos os elementos", async function () {
      sinon.stub(productsModel, 'modelGetAll').resolves(mockvazia);

      const result = await productsService.serviceGetAll();

      expect(result.message).to.be.a('string');
      expect(result.message).to.be.eq( 'Dados não encontrados' );
    }); */

    it('Retorna o id', async function () {
       sinon.stub(connection, 'execute').resolves([[{id:1, name: 'Martelo de Thor'}]]);
      const result = await productsModel.procuraIdModel(1);
      expect(result).to.deep.equal({id:1, name: 'Martelo de Thor'})
    });
  });
});