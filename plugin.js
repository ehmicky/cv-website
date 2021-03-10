module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    show({ summary: 'Test' })
  }
}
