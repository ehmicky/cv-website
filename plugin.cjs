module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
  }) {
    show({ summary: 'Test' })
  },
}
