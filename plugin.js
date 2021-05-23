module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    process.env.TRY = 'test'
    show({ summary: 'Test' })
  }
}
