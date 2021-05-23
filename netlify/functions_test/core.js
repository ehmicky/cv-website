import { version } from 'process'

export const handler = async function(event, context) {
  return { statusCode: 200, body: `Node.js ${version} ${Date.now()}` }
}
