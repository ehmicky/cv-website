const del = require('del')

module.exports = {
  async onBuild({utils}) {
    await del('.', {force: true})
    console.log(await utils.cache.list())
    console.log(utils.git)
  }
}
