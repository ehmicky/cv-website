const { name } = require('../../package.json')

export const handler = async function(event, context) {
  return { statusCode: 200, body: `${name} ${Date.now()}` }
}
