// @ts-ignore
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import JWT from 'jsonwebtoken';

import { Response } from 'superagent';
import app from '../app';
import Order from '../database/models/Order';

import {
  findAllMock,
} from './mocks/order.mock';
import {
  errorResponseMock, errorResponseTokenInvalidMock, jwtPayloadMock, token, tokenNotFoundResponseMock,
} from './mocks/generic.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /orders', () => {
  describe('It is possible to successfully make a request using a valid token', () => {
    beforeEach(async () => {
      sinon.stub(JWT, 'verify').returns(jwtPayloadMock);
      sinon.stub(Order, 'findAll').resolves(findAllMock);
    });
    afterEach(() => {
      (Order.findAll as sinon.SinonStub).restore();
      (JWT.verify as sinon.SinonStub).restore();
    });
    it('should return a status code 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/orders').set('Authorization', token)
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findAllMock);
    });
  });

  describe('An error occurred when making a request with an invalid token', () => {
    beforeEach(async () => {
      sinon.stub(JWT, 'verify').throws(new Error('Invalid token!'));
    });
    afterEach(() => {
      (JWT.verify as sinon.SinonStub).restore();
    });
    it('should return a status code 401', async () => {
      const httpResponse: Response = await chai.request(app).get('/orders').set('Authorization', 'invalidToken')
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(errorResponseTokenInvalidMock);
    });
  });

  describe('An error occurred while making a request without a token.', () => {
    it('should return a status code 401', async () => {
      const httpResponse: Response = await chai.request(app).get('/orders');
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(tokenNotFoundResponseMock);
    });
  });

  describe('An error occurred while making a request', () => {
    beforeEach(async () => {
      sinon.stub(JWT, 'verify').returns(jwtPayloadMock);
      sinon.stub(Order, 'findAll').rejects(new Error('An error has occurred!'));
    });
    afterEach(() => {
      (Order.findAll as sinon.SinonStub).restore();
      (JWT.verify as sinon.SinonStub).restore();
    });
    it('should return a status code 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/orders').set('Authorization', token)
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponseMock);
    });
  });
});
