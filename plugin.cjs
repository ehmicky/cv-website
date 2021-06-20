module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    console.log(netlifyConfig)
    show({ summary: 'Test' })
  },
}
