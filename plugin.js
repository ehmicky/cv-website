const terminalLink = require('terminal-link')

module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    console.log(terminalLink('Netlify', 'https://www.netlify.com'))
    show({ summary: 'Test' })
  }
}
