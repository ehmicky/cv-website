module.exports = {
  onPreBuild({ utils: { status: { show } }, netlifyConfig }) {
    netlifyConfig.build.command = 'test'
    show({ summary: 'Test' })
  }
}
