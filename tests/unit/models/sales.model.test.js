/* const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const mockSales = require('../mock/sales.mock');
const idSalesService = require('../../../src/services/sales.services');


describe('Teste Model de sales', function () {
  describe('Listar todas as sales', function () {

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([mockSales]);
    });
    it('Tem que retornar um array com todos os elementos de sales', async function () {
      const result = await idSalesService.serviceSalesGetAll();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(mockSales);
  })
    afterEach(() => {
      sinon.restore();
    })
  });
}); */