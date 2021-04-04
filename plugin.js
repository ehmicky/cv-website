const { link } = require('ansi-escapes');

module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log(link('some text', 'https://example.com') + '   <--- command + click here!');
    show({ summary: 'Test' })
  }
}
