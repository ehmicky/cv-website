module.exports = {
  onPostBuild({ utils: { status: { show } }, packageJson }) {
    console.log(packageJson)
    show({ summary: 'Test' })
  }
}
