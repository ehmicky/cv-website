module.exports = {
  onPreBuild({ utils: { status: { show }, build: { failBuild } } }) {
    failBuild('Test')
    show({ summary: 'Test' })
  }
}
