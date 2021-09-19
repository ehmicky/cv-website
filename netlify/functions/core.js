const { version } = require('process')

// eslint-disable-next-line require-await
module.exports.handler = async function () {
  return { statusCode: 200, body: `Node.js ${version} ${Date.now()}` }
}
