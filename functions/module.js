const avg = require('math-avg')

module.exports.handler = async function(event, context) {
  const number = avg([2, 4])
  return { statusCode: 200, body: `${number} ${Date.now()}` }
}
