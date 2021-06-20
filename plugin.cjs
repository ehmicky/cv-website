module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    redirects,
    netlifyConfig,
  }) {
    console.log(redirects)
    netlifyConfig.build.command = ''
    show({ summary: 'Test' })
  },
}
