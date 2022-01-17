const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();
const app = require('../../backend/src/app');

let backend;
let frontend;
let browser;
let page;

beforeAll(() => {
  backend = http.createServer(app);
  backend.listen(3010, () => {
    console.log('Backend Running at http://localhost:3010');
  });
  frontend = http.createServer(
    express()
      .use('/v0', createProxyMiddleware({
        target: 'http://localhost:3010/',
        changeOrigin: true
      }))
      .use('/static', express.static(
        path.join(__dirname, '..', '..', 'frontend', 'build', 'static')))
      .get('*', function (req, res) {
        res.sendFile('index.html',
          { root: path.join(__dirname, '..', '..', 'frontend', 'build') })
      })
  );
  frontend.listen(3000, () => {
    console.log('Frontend Running at http://localhost:3000');
  });
});

afterAll((done) => {
  backend.close(() => {
    frontend.close(done);
  });
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--headless',
    ],
  });
  page = await browser.newPage();
});

afterEach(async () => {
  await browser.close();
});

test('Go to Login', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/login button');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign In');
  await page.click('aria/login button');
  label = await page.$('aria/login page');
  cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign in here');
});

test('Go to Category', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/category button');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('All Categories');
  await page.click('aria/category button');
});

test('Show Listings', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/grab listings');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Show Listings');
  await page.click('aria/grab listings');
});

test('Login test', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/login button');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign In');
  await page.click('aria/login button');
  await page.waitForSelector('#email');
  await page.type('#email', 'molly@books.com');
  await page.waitForSelector('#password');
  await page.type('#password', 'mollymember');
  label = await page.$('aria/loginz page');
  await page.click('aria/loginz page');
});

test('Create Account test', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/login button');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign In');
  await page.click('aria/login button');
  label = await page.$('aria/create account');
  await page.click('aria/create account');
  await page.waitForSelector('#namecr');
  await page.type('#namecr', 'Madara');
  await page.waitForSelector('#emailcr');
  await page.type('#emailcr', 'madara@uchiha.com');
  await page.waitForSelector('#passwordcr');
  await page.type('#passwordcr', 'Tobi');
  label = await page.$('aria/createz account');
  await page.click('aria/createz account');
});

test('Search Test', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/grab listings');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Show Listings');
  await page.click('aria/grab listings');
  await page.waitForSelector('#searchb');
  await page.type('#searchb', 'Toyota');
  await page.keyboard.press('Enter');
});


