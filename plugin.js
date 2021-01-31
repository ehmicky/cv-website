const { promisify } = require('util')
const pSetTimeout = promisify(setTimeout)

module.exports = {
  async onSuccess({ utils: { status: { show } } }) {
    await pSetTimeout(6e4)
    show({ summary: 'Test' })
  }
}
