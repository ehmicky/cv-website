module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: "${env:BUILD_ID}" }
}
