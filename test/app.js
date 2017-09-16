const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /movies', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/movies')
      .expect(200, done);
  });

  it('should respond with JSON', () => {
    request(app)
      .get('/movies')
      .expect('Content-Type', 'application/json');
  });
});

describe('GET /movies/search', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/movies/search')
      .expect(200, done);
  });

  it('should respond with JSON', () => {
    request(app)
      .get('/movies/search')
      .expect('Content-Type', 'application/json');
  });
});
