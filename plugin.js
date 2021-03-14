module.exports = {
  onPostBuild({ utils: { status: { show }, build: { failBuild } } }) {
    const error = new Error('try this')
    error.customType = 'this custom type'
    failBuild('Try that', { error })
    show({ summary: 'Test' })
  }
}
