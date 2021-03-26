const { spawn } = require('child_process')

module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    spawn('sleep', ['60'], { detached: true })
    show({ summary: 'Test' })
  }
}
