const supertest = require('supertest');
const http = require('http');

const db = require('./db');
const app = require('../app');

let server;

beforeAll(() => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
  return db.reset();
});

afterAll((done) => {
  server.close(done);
});

test('GET Invalid URL', async () => {
  await request.get('/v0/so-not-a-real-end-point-ba-bip-de-doo-da/')
    .expect(404);
});

test('test Molly login', async () => {
  await request.post('/authenticate')
    .send({email:"molly@books.com",
        password:"mollymember"})
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
      expect(res.body).toBeDefined();
      expect(res.body.name).toBe("Molly Member");
    });
});


test('test invalid login', async () => {
    await request.post('/authenticate')
      .send({email:"notaperson@somewhere.org",
          password:"password"})
      .expect(401);
  });
