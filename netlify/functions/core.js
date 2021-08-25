import { version } from 'process'

// eslint-disable-next-line require-await
export const handler = async function () {
  return { statusCode: 200, body: `Node.js ${version} ${Date.now()}` }
}
