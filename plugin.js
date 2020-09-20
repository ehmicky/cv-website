module.exports = {
  onSuccess({ utils: { status: { show }, build: { failBuild } } }) {
    failBuild('try this')
    show({ summary: 'Test' })
  }
}
