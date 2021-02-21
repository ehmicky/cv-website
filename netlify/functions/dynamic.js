const dependency = 'test'
const value = require(dependency)

module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: String(value) }
}
