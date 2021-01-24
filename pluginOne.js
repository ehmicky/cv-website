module.exports = {
  onPreBuild() {
    process.env.A = 'test'
  },
  onSuccess({ utils: { status: { show } } }) {
    show({ summary: 'Test' })
  }
}
