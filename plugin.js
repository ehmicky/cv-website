module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    show({ summary: 'Test' })
  },
  onSuccess() {
    throw new Error('test')
  }
}
