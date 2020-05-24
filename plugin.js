module.exports = {
  onBuild() {
    console.log(process.cwd(), process.execPath, process.argv)
  }
}
