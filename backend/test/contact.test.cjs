require('reflect-metadata');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { NestFactory } = require('@nestjs/core');
const { ValidationPipe } = require('@nestjs/common');
const { AppModule } = require('../dist/app.module');

test('contact rejects invalid input and never reports delivery without a provider', async () => {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  await app.listen(0, '127.0.0.1');
  try {
    const address = await app.getUrl();
    const invalid = await fetch(`${address}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Visitor', email: 'invalid', message: 'Hello' }),
    });
    assert.equal(invalid.status, 400);
    const valid = await fetch(`${address}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Visitor', email: 'visitor@example.com', message: 'Hello' }),
    });
    assert.equal(valid.status, 503);
    assert.equal((await valid.json()).success, false);
  } finally {
    await app.close();
  }
});
