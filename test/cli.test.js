import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { test } from 'node:test';
import packageJson from '../package.json' with { type: 'json' };

const cliPath = resolve('src/cli.js');

test('package manifest exposes both CLI binaries with valid paths', () => {
  assert.deepEqual(packageJson.bin, {
    yaas: 'src/cli.js',
    'yaas-mcp': 'src/mcp.js'
  });
});

test('CLI returns Yes!', () => {
  const result = spawnSync(process.execPath, [cliPath], { encoding: 'utf8' });

  assert.equal(result.status, 0);
  assert.equal(result.stdout, 'Yes!\n');
  assert.equal(result.stderr, '');
});

test('CLI ignores arguments and stdin', () => {
  const result = spawnSync(process.execPath, [cliPath, '--payload', 'yes'], {
    encoding: 'utf8',
    input: '{"question":"please?"}'
  });

  assert.equal(result.status, 0);
  assert.equal(result.stdout, 'Yes!\n');
  assert.equal(result.stderr, '');
});
