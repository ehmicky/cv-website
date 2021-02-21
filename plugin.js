module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    console.log(process.version)
    show({ summary: 'Test' })
  }
}
