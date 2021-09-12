module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
  },
}
