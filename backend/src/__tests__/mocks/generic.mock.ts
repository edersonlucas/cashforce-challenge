export const errorResponseMock = { message: 'Internal Server Error!' };

export const errorResponseTokenInvalidMock = { message: "Token must be a valid token" };

export const jwtPayloadMock = {
  "id": 1,
  "name": "ALLAN SOUZA",
  "email": "allan@cashforce.com.br",
  "iat": 1672770474
};

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFMTEFOIFNPVVpBIiwiZW1haWwiOiJhbGxhbkBjYXNoZm9yY2UuY29tLmJyIiwiaWF0IjoxNjcyNzcwNDc0fQ.b-ZmWgzDQh9ChOvbfJJRndl6p2k51QDm2CboLMzUNvM';

export const emailMissingResponseMock = { message: "Email field missing!" };

export const tokenNotFoundResponseMock = { message: "Token not found" };
