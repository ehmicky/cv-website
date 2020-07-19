module.exports.handler = async function(event, context) {
  return { statusCode: 200, body: JSON.stringify(process.env, null, 2) }
}
