export const onPreBuild = function({
  utils: {
    status: { show },
  },
  netlifyConfig,
}) {
  console.log(process.env.DEPLOY_URL)
  console.log(process.env.DEPLOY_PRIME_URL)
  console.log(process.env.SITE_NAME)
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
