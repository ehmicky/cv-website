module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    show({ summary: 'Test' })
  },
  onSuccess({ utils: { build: { failBuild } } }) {
    failBuild('test')
  }
}
