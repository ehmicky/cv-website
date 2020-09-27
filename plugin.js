module.exports = {
  onPostBuild({ utils: { status: { show }, build: { failBuild } } }) {
    show({ summary: 'Test' })
    failBuild('test')
  }
}
