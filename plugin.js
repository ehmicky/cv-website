const { rename } = require('fs')
const { promisify } = require('util')

const pRename = promisify(rename)

module.exports = {
  async onPreBuild({ constants: { FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC } }) {
    console.log({ FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC })
    await pRename('funcs', 'netlify-automatic-functions')
  },
  onPostBuild({ utils: { status: { show } }, constants: { FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC } }) {
    console.log({ FUNCTIONS_SRC, FUNCTIONS_DIST, EDGE_HANDLERS_SRC })
    show({ summary: 'Test' })
  }
}
