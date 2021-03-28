const psList = require('ps-list')

module.exports = {
  async onPreBuild({ utils: { status: { show } } }) {
    console.log(await psList({ all: true }))
    console.log('----')
    console.log(await psList({ all: false }))
    show({ summary: 'Test' })
  }
}
