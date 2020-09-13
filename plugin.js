module.exports = {
  onPostBuild({ utils: { status: { show }, build: { cancelBuild } } }) {
    cancelBuild('Try this')
    show({ summary: 'Test' })
  }
}
