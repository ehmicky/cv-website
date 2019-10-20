const { version } = require('process')

module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: `Foo Node.js ${version}` }
}
