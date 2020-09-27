module.exports = {
  onPostBuild({ utils: { status: { show } }, constants: { NETLIFY_API_TOKEN } }) {
    console.log({ NETLIFY_API_TOKEN })
    show({ summary: 'Test' })
  }
}
