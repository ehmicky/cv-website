module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    netlifyConfig.build.publish = "new"
    show({ summary: 'Test' })
  },
  onSuccess({ netlifyConfig }) {
    console.log(netlifyConfig.build.publish)
  },
}
