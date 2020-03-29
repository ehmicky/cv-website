module.exports = {
  onInit({ utils }) {
    console.log(process.env.URL)
    console.log(process.env.REPOSITORY_URL)
    utils.build.cancelBuild()
  }
}
