const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('should respond with HTML', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8', done);
  });
});

describe('GET /movies', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/movies')
      .expect(200, done);
  });

  it('should respond with HTML', (done) => {
    request(app)
      .get('/movies')
      .expect('Content-Type', 'text/html; charset=utf-8', done);
  });
});

describe('GET /movies/search', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/movies/search')
      .expect(200, done);
  });

  it('should respond with HTML', (done) => {
    request(app)
      .get('/movies/search')
      .expect('Content-Type', 'text/html; charset=utf-8', done);
  });
});
