export const onPreBuild = function({
  constants,
  utils: {
    status: { show },
  },
  netlifyConfig,
}) {
  console.log(constants.NETLIFY_BUILD_VERSION)
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
