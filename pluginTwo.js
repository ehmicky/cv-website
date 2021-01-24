module.exports = {
  onPostBuild() {
    console.log('A', process.env.A)
  }
}
