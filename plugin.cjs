module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
    netlifyConfig.build.processing.images = {}
    netlifyConfig.build.processing.images.compress = true
  },
}
