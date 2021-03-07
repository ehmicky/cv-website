module.exports = {
  onPostBuild({ utils: { status: { show } }, constants: { CACHE_DIR } }) {
    console.log({ CACHE_DIR })
    show({ summary: 'Test' })
  }
}
