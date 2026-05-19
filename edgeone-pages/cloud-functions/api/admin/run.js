import { handleEdgeOneRequest } from '../../../src/handler.js';
import { mergeEdgeOneEnv } from '../../../src/edgeone-env.js';

export async function onRequest({ request, env = {} }) {
  return handleEdgeOneRequest(request, mergeEdgeOneEnv(env));
}
