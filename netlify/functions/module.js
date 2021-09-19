const avg = require('math-avg')

// eslint-disable-next-line require-await
module.exports.handler = async function () {
  const number = avg([2, 3])
  return { statusCode: 200, body: `${number} ${Date.now()}` }
}
