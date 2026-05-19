const EDGEONE_GLOBALS = [
  'ADMIN_TOKEN',
  'ZJMF_KV',
  'KV',
  'EDGEONE_KV',
  'GITHUB_REPOSITORY',
  'GITHUB_BRANCH',
  'GITHUB_TOKEN',
  'WEB_UPDATE_GITHUB_TOKEN',
  'APP_VERSION',
];

function readGlobal(name) {
  try {
    return globalThis[name];
  } catch {
    return undefined;
  }
}

export function mergeEdgeOneEnv(env = {}) {
  const merged = { ...(env || {}) };
  for (const name of EDGEONE_GLOBALS) {
    if (merged[name] === undefined) merged[name] = readGlobal(name);
  }
  return merged;
}
