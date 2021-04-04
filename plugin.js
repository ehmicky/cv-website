const AnsiUp = require('ansi_up')
const ansiUp = new AnsiUp.default

module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log(ansiUp.ansi_to_html(']8;;http://www.google.com\x07b b'))
    show({ summary: 'Test' })
  }
}
