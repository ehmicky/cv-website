export const onPreBuild = function({
  utils: {
    status: { show },
  },
  netlifyConfig,
}) {
  console.log('a'.repeat(1e6))
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
