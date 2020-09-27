module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    show({ summary: 'Test ${env:NETLIFY_BUILD_DEBUG}' })
  }
}
