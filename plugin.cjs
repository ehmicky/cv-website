module.exports = {
  onPreBuild({
    utils: {
      status: { show },
      build: { cancelBuild },
    },
  }) {
    show({ summary: 'Test' })
    cancelBuild('test')
  },
}
