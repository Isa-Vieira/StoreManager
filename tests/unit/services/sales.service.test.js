/* const { salesMock, mockDataSales } = require("../mock/sales.mock");

const modelSalesGetAll = require('../../../src/models/sales.model');
const idSalesService = require('../../../src/services/sales.services');

describe('Teste Sales Service', function () {
  describe('Listando sales', function () {
  it("Caso de sucesso, model retorna um array com todos os elementos de sales", async function () {
      sinon.stub(modelSalesGetAll, 'modelSalesGetAll').resolves(salesMock);
      const result = await serviceSalesGetAll.modelSalesGetAll();
      expect(result.message).to.be.a('array');
      expect(result.message).to.be.eq(salesMock);
    });
    afterEach(() => {
      sinon.restore();
    });

    it('Retorna o id de sales', async function () {
       sinon.stub(connection, 'execute').resolves([[{id:1, date: "2021-09-09T04:54:29.000Z"}]]);
      const result = await idSalesService.procuraIdSalesModel(1);
      expect(result).to.deep.equal({id:1, name: "2021-09-09T04:54:54.000Z"})
    });
  });
}); */