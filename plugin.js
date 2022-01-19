export const onPreBuild = function({
  utils: {
    status: { show },
  },
  netlifyConfig,
}) {
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
