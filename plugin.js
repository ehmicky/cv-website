const { rename } = require('fs')
const { promisify } = require('util')

const pRename = promisify(rename)

module.exports = {
  async onPreBuild({ utils: { status: { show } }, constants }) {
    console.log(constants)
    await pRename('netlify/functions_test', 'netlify/functions')
    show({ summary: 'Test' })
  },
  onBuild({ constants }) {
    console.log(constants)
  }
}
