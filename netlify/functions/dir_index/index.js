// eslint-disable-next-line require-await, filenames/no-index
module.exports.handler = async function () {
  return { statusCode: 200, body: String(Date.now()) }
}
