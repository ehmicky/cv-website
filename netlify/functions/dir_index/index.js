// eslint-disable-next-line require-await, filenames/no-index
export const handler = async function () {
  return { statusCode: 200, body: String(Date.now()) }
}
