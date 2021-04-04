const { spawn } = require('child_process')
const { link } = require('ansi-escapes')

module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log(`
These processes have been terminated. In case this creates a problem for your build, refer to this ${link('article', 'https://answers.netlify.com/t/support-guide-how-to-address-the-warning-message-related-to-terminating-processes-in-builds/35277')} for details about why this process termination happens and how to fix it.
    `)
    spawn('sleep', ['60'], { detached: true })
    show({ summary: 'Test' })
  }
}
