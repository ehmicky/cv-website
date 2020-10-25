const now = require('./dynamic/thing')
exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}! It is ${now()}`,
  }
}
