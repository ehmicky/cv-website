module.exports = {
  onPreBuild({ utils: { status: { show }, build: { cancelBuild } } }) {
    cancelBuild('Test')
    show({ summary: 'Test' })
  }
}
