module.exports = {
  onSuccess({ utils: { status: { show } } }) {
    show({ summary: 'Test' })
  }
}
