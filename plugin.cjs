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
    process.exit(1)
    show({ summary: 'Test' })
    netlifyConfig.redirects = [...netlifyConfig.redirects, { from: '/one', to: '/two' }]
  },
}
