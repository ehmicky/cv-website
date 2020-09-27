module.exports = {
  onPostBuild() {
    console.log('onPostBuild')
  },
  onSuccess() {
    console.log('onSuccess')
    // Throw new Error('onSuccess error')
  },
  onEnd() {
    console.log('onEnd')
    // Throw new Error('onEnd error')
  },
}
