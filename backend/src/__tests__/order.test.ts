// @ts-ignore
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../app';
import Order from '../database/models/Order';

import { Response } from 'superagent';

import { 
  findAllByUserIdMock,
} from './mocks/order.mock';
import {
  errorResponseMock
} from './mocks/generic.mock';

chai.use(chaiHttp);

const { expect } = chai;


describe('GET /order/:id', () => {

  describe('Is it possible to make a request successfully', () => {
    beforeEach(async () => {
    sinon
      .stub(Order, "findAll")
      .resolves(findAllByUserIdMock);
    });
    afterEach(()=>{
    (Order.findAll as sinon.SinonStub).restore();
    })
    it('should return a status code 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/order/1');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findAllByUserIdMock)
    })
  });

  describe('An error occurred while making a request', () => {
    beforeEach(async () => {
    sinon
      .stub(Order, "findAll").rejects(new Error('Ocorreu um erro!'))
    });
    afterEach(()=>{
    (Order.findAll as sinon.SinonStub).restore();
    })
    it('should return a status code 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/order/1');
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponseMock)
    })
  });

});