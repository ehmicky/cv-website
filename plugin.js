module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log(']8;;http://www.google.com\x07b b')
    show({ summary: 'Test' })
  }
}
