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

test('test create Bob', async () => {
  await request.post('/createUser')
    .send({name: "Bob", email:"bob@email.com",
        password:"password"})
    .expect(201)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
      expect(res.body).toBeDefined();
      expect(res.body.name).toBe("Bob");
    });
});

test('test Bob login', async () => {
    await request.post('/authenticate')
      .send({email:"bob@email.com",
        password:"password"})
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res).toBeDefined();
        expect(res.body).toBeDefined();
        expect(res.body.name).toBe("Bob");
      });
  });

/*
test('test invalid login', async () => {
    await request.post('/authenticate')
      .send({email:"notaperson@somewhere.org",
          password:"password"})
      .expect(401);
  }); */