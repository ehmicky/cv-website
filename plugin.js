module.exports = {
  onPostBuild({ utils: { status: { show } }, constants: { FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC } }) {
    console.log({ FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC })
    show({ summary: 'Test' })
  }
}
