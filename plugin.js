module.exports = {
  onBuild({ utils: { build: { failBuild } } }) {
    failBuild('test')
  }
}
