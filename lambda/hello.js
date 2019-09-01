import { version } from 'process'

export const handler = function(event, context, callback) {
  callback(null, { statusCode: 200, body: `Node.js ${version}` })
}
