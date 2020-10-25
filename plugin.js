module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    process.env.CONTEXT = 'deploy-preview'
    show({ summary: 'Test' })
  }
}
