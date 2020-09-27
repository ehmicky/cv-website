const { spawn } = require('child_process')

module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    spawn('node', { detached: true, stdio: 'ignore' })
    show({ summary: 'Test' })
  }
}
