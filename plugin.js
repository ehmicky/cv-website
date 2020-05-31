module.exports = {
  onPostBuild({ utils: { build: { failBuild } } }) {
    failBuild('one\ntwo\n\nthree \nfour  \nfive', { error: new Error('test') })
  }
}
