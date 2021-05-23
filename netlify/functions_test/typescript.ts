export const handler = async function () {
  const statusCode: number = 200
  const body: string = String(Date.now())
  return { statusCode, body }
}
