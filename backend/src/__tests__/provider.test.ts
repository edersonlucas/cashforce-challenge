// @ts-ignore
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import JWT from 'jsonwebtoken';

import app from '../app';
import Provider from '../database/models/Provider';

import { Response } from 'superagent';

import { 
  findByIdMock
} from './mocks/provider.mock';
import {
  errorResponseMock, errorResponseTokenInvalidMock, jwtPayloadMock, token
} from './mocks/generic.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /provider/:id', () => {

  describe('It is possible to successfully make a request using a valid token', () => {
    beforeEach(async () => {
      sinon.stub(JWT, 'verify').returns(jwtPayloadMock);
      sinon.stub(Provider, "findOne").resolves(findByIdMock);
    });
    afterEach(()=>{
      (Provider.findOne as sinon.SinonStub).restore();
      (JWT.verify as sinon.SinonStub).restore();
    })
    it('should return a status code 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/provider/1').set('Authorization', token);
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findByIdMock)
    })
  });

  describe('An error occurred when making a request with an invalid token', () => {
    beforeEach(async () => {
      sinon.stub(JWT, 'verify').throws(new Error('Invalid token!'));
    });
    afterEach(() => {
      (JWT.verify as sinon.SinonStub).restore();
    });
    it('should return a status code 401', async () => {
      const httpResponse: Response = await chai.request(app).get('/provider/1').set('Authorization', 'invalidToken')
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(errorResponseTokenInvalidMock);
    });
  });

  describe('An error occurred while making a request', () => {
    beforeEach(async () => {
      sinon.stub(Provider, "findOne").rejects(new Error('An error has occurred!'));
      sinon.stub(JWT, 'verify').returns(jwtPayloadMock);
    });
    afterEach(()=>{
      (Provider.findOne as sinon.SinonStub).restore();
      (JWT.verify as sinon.SinonStub).restore();
    })
    it('should return a status code 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/provider/1').set('Authorization', token);
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponseMock)
    })
  });

});