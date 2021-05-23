module.exports = {
  onPreBuild({ utils: { status: { show } }, netlifyConfig }) {
    netlifyConfig.build.functions = 'testthis'
    show({ summary: 'Test' })
  }
}
