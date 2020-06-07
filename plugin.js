module.exports = {
  async onBuild({ utils: { functions: { list } } }) {
    console.log(await list())
  }
}
