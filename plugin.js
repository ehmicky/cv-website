module.exports = {
  name: 'netlify-plugin-example',
  async onInit({ utils: { build } }) {
    await build.cancel('Test this')
  }
}
