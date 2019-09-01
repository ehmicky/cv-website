import { version } from 'process'

// eslint-disable-next-line require-await, no-unused-vars
export const handler = async function(event, context) {
  return { statusCode: 200, body: `Node ${version}` }
}
