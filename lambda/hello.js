import { version } from 'process'
import { callbackify } from 'util'

// eslint-disable-next-line require-await, no-unused-vars
export const handler = callbackify(async function handle(event, context) {
  return { statusCode: 200, body: `Node ${version}` }
})
