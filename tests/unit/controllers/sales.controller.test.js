const { expect } = require("chai");
const chai = require('chai');
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { returnService } = require('../mock/products.mock');
const controllerGetAllSales = require('../../../src/controllers/sales.controller');
const SalesService = require('../../../src/services/sales.services')

chai.use(sinonChai);

describe('Teste o controller das vendas', function () { 
  describe('Listar todos as vendas', function () {
    it('Se lista todas as vendas', async function () {
      sinon.restore();
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(SalesService, 'serviceSalesGetAll').resolves(returnService);

      await controllerGetAllSales.controllerGetAllSales({}, res);

      expect(res.status).to.have.been.calledOnceWith(200);
    });
  });
});