import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

test('Cloudflare 部署 workflow 使用 Node.js 22 运行 Wrangler', async () => {
  const workflow = await readFile(path.join(root, '.github', 'workflows', 'deploy.yml'), 'utf8');

  assert.match(workflow, /node-version:\s*24\b/);
  assert.match(workflow, /wrangler@latest/);
});
