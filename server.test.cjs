const test = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('./server.cjs');

test('HTTP 응답이 200이고 v1 본문을 반환한다', async (t) => {
  const server = createServer();
  t.after(() => new Promise((resolve) => server.close(resolve)));

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const response = await fetch(`http://127.0.0.1:${port}/`);
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.equal(body, 'jenkins-docker-practice v1\n');
});
