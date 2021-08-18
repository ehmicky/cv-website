const { readdir } = require('fs')
const { promisify } = require('util')

const pReaddir = promisify(readdir)

module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
    netlifyConfig.redirects.push({ from: '/one', to: '/two' })
    netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
  },
}
