const hyperlinker = require('hyperlinker')

module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log(hyperlinker('Netlify', 'https://www.netlify.com'))
    show({ summary: 'Test' })
  }
}
