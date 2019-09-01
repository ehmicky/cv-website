// eslint-disable-next-line promise/prefer-await-to-callbacks, import/unambiguous
const handler = function(event, context, callback) {
  // eslint-disable-next-line promise/prefer-await-to-callbacks, node/prefer-global/process, no-restricted-globals
  callback(null, { statusCode: 200, body: `Node.js ${process.version}` })
}

// eslint-disable-next-line import/no-commonjs
module.exports = {
  handler,
}
