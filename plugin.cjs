module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
    netlifyConfig.build.command = "gulp build && echo oh"
  },
}
