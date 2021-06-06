module.exports = {
  onPreBuild({ utils: { status: { show } }, netlifyConfig: { redirects } }) {
    console.log(redirects)
    show({ summary: 'Test' })
  }
}
