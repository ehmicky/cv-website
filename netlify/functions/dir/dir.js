// eslint-disable-next-line require-await
module.exports.handler = async function () {
  return { statusCode: 200, body: String(Date.now()) }
}
