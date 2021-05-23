module.exports = {
  onPreBuild({ utils: { status: { show } }, netlifyConfig }) {
    netlifyConfig.build.command = "gulp build && echo test"
    show({ summary: 'Test' })
  }
}
