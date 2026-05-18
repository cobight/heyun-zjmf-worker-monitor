import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const localScriptDir = path.join(repoRoot, 'windows-one-click-deploy');

function readUtf8(relativePath) {
  return readFileSync(path.join(localScriptDir, relativePath), 'utf8');
}

test('步骤1脚本写明 GitHub 仓库地址并复用为下载源', () => {
  const wrapper = readUtf8('步骤1-一键安装脚本.bat');
  const installer = readUtf8('步骤1-一键安装.bat');

  assert.match(wrapper, /GitHub 仓库地址|UPSTREAM_REPO/);
  assert.match(installer, /GitHub 仓库地址|UPSTREAM_REPO/);
  assert.match(installer, /raw\.githubusercontent\.com/);
});
