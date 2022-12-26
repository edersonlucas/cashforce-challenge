// @ts-ignore
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../app';
import Provider from '../database/models/Provider';

import { Response } from 'superagent';

import { 
  findByIdMock
} from './mocks/provider.mock';
import {
  errorResponseMock
} from './mocks/generic.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /provider/:id', () => {

  describe('Is it possible to make a request successfully', () => {
    beforeEach(async () => {
    sinon
      .stub(Provider, "findOne")
      .resolves(findByIdMock);
    });
    afterEach(()=>{
    (Provider.findOne as sinon.SinonStub).restore();
    })
    it('should return a status code 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/provider/1');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findByIdMock)
    })
  });

  describe('An error occurred while making a request', () => {
    beforeEach(async () => {
    sinon
      .stub(Provider, "findOne").rejects(new Error('Ocorreu um erro!'))
    });
    afterEach(()=>{
    (Provider.findOne as sinon.SinonStub).restore();
    })
    it('should return a status code 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/provider/1');
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponseMock)
    })
  });

});