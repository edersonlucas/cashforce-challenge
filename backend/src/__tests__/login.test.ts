// @ts-ignore
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import JWT from 'jsonwebtoken';

import { Response } from 'superagent';
import app from '../app';
import User from '../database/models/User';

import { emailMissingResponseMock, token } from './mocks/generic.mock';
import { findOneMock, userNotFoundResponse } from './mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  describe('It is possible to login successfully using an existing email.', () => {
    beforeEach(async () => {
      sinon.stub(User, 'findOne').resolves(findOneMock);
      sinon.stub(JWT, 'sign').returns(token);
    });
    afterEach(() => {
      (User.findOne as sinon.SinonStub).restore();
      (JWT.sign as sinon.SinonStub).restore();
    });
    it('should return a status code 200', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send({
        "email": "allan@cashforce.com.br"
      });
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal({ token });
    });
  });

  describe('Error when logging in with non-existent email.', () => {
    beforeEach(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });
    afterEach(() => {
      (User.findOne as sinon.SinonStub).restore();
    });
    it('should return a status code 404', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send({
        "email": "fake@cashforce.com.br"
      });
      expect(httpResponse.status).to.equal(404);
      expect(httpResponse.body).to.deep.equal(userNotFoundResponse);
    });
  });

  describe('Error when logging in without email field.', () => {
    it('should return a status code 400', async () => {
      const httpResponse: Response = await chai.request(app).post('/login');
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal(emailMissingResponseMock);
    });
  });

  // describe('An error occurred when making a request with an invalid token', () => {
  //   beforeEach(async () => {
  //     sinon.stub(JWT, 'verify').throws(new Error('Invalid token!'));
  //   });
  //   afterEach(() => {
  //     (JWT.verify as sinon.SinonStub).restore();
  //   });
  //   it('should return a status code 401', async () => {
  //     const httpResponse: Response = await chai.request(app).get('/orders').set('Authorization', 'invalidToken')
  //     expect(httpResponse.status).to.equal(401);
  //     expect(httpResponse.body).to.deep.equal(errorResponseTokenInvalidMock);
  //   });
  // });

  // describe('An error occurred while making a request', () => {
  //   beforeEach(async () => {
  //     sinon.stub(JWT, 'verify').returns(jwtPayload);
  //     sinon.stub(Order, 'findAll').rejects(new Error('An error has occurred!'));
  //   });
  //   afterEach(() => {
  //     (Order.findAll as sinon.SinonStub).restore();
  //     (JWT.verify as sinon.SinonStub).restore();
  //   });
  //   it('should return a status code 500', async () => {
  //     const httpResponse: Response = await chai.request(app).get('/orders').set('Authorization', token)
  //     expect(httpResponse.status).to.equal(500);
  //     expect(httpResponse.body).to.deep.equal(errorResponseMock);
  //   });
  // });
});
