module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    throw new Error('build failure')
    show({ summary: 'Test' })
  },
  onError({ utils: { build: { failBuild } } }) {
    failBuild('test')
  },
}
