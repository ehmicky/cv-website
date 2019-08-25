// eslint-disable-next-line promise/prefer-await-to-callbacks, import/unambiguous
const handler = function(event, context, callback) {
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  callback(null, { statusCode: 200, body: 'Hello world' })
}

// eslint-disable-next-line import/no-commonjs
module.exports = {
  handler,
}
