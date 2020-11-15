const { name } = require('../package.jsons')

module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: `${name} ${Date.now()}` }
}
