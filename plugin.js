module.exports = {
  onSuccess({ utils: { status: { show } } }) {
    throw new Error('Arg')
    show({ summary: 'Test' })
  }
}
