import avg from 'math-avg'

// eslint-disable-next-line require-await
export const handler = async function () {
  const number = avg([2, 3])
  return { statusCode: 200, body: `${number} ${Date.now()}` }
}
