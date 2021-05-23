module.exports = {
  async onPreBuild({ utils: { status: { show } }, netlifyConfig }) {
    netlifyConfig.functionsDirectory = 'netlify/functions_test'
    show({ summary: 'Test' })
  }
}
