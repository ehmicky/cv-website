const { version } = require('process')
const fetch = require('node-fetch').default

module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: `Node.js ${version} ${Date.now()} ${fetch}` }
}
