const { expect } = require("chai");
const chai = require('chai');
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { returnService } = require('../mock/products.mock');
const productsService = require('../../../src/services/products.services');
const productsController = require("../../../src/controllers/products.controller");

chai.use(sinonChai);

describe('Teste o controller de produtos', function () {
  describe('Listar todos os produtos', function () {
    it('Se lista todos os produtos', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'serviceGetAll').resolves(returnService);

      await productsController.controllerGetAll({}, res);

      expect(res.status).to.have.been.calledOnceWith(200);
    })
  })
})
