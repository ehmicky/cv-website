const { spawn } = require('child_process')
const { promisify } = require('util')

const pSetTimeout = promisify(setTimeout)

module.exports = {
  async onPostBuild({ utils: { status: { show } } }) {
    spawn('node', [`${__dirname}/forever.js`], { detached: true, stdio: 'ignore' })
    await pSetTimeout(1e4)
    console.log('Test')
    show({ summary: 'Test' })
  }
}
