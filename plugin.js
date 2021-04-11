const { link } = require('ansi-escapes')
const terminalLink = require('terminal-link')

module.exports = {
  onPostBuild() {
    console.log('https://www.netlify.com/')
    console.log('\x1B]8;;https://www.netlify.com\x07Netlify\x1B]8;;\x07')
    console.log(link('Netlify', 'https://www.netlify.com/'))
    console.log(terminalLink('Netlify', 'https://www.netlify.com/'))
  }
}
