const { salesMock, mockService } = require("../mock/sales.mock");
const sinon = require('sinon')
const { expect } = require('chai')
const modelSalesGetAll = require('../../../src/models/sales.model');
const serviceSalesGetAll = require('../../../src/services/sales.services');
const { modelSales } = require("../../../src/models");

describe('Teste Sales Service', function () {
  describe('Listando sales', function () {
  it("Caso de sucesso, model retorna um array com todos os elementos de sales", async function () {
      sinon.stub(modelSalesGetAll, 'modelSalesGetAll').resolves(salesMock);
      const result = await serviceSalesGetAll.serviceSalesGetAll();
      expect(result.message).to.be.a('array');
      expect(result.message).to.be.eq(salesMock);
    });
    afterEach(() => {
      sinon.restore();
    });

    it('Retorna o id de sales', async function () {
      sinon.stub(modelSales, "procuraIdSalesModel").resolves(salesMock);
      const result = await serviceSalesGetAll.idSalesService(1);
      expect(result).to.deep.equal(mockService);
    });

    it("Retorna a falha do id Sales", async function () {
      sinon.stub(modelSales, "procuraIdSalesModel").resolves({});
      const result = await serviceSalesGetAll.idSalesService(1);
      expect(result).to.deep.equal({
        message: null,
        status: 404,
      });
    });
  });
});
