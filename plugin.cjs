module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
  }) {
    show({ summary: 'Test' })
  },
  onBuild({ netlifyConfig: { redirects } }) {
    console.log(redirects)
  },
}
