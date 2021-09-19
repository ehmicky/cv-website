const dependency = 'test'

module.exports.handler = async function () {
  const value = require(dependency)
  return { statusCode: 200, body: String(value) }
}
