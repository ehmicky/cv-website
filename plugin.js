export const onPreBuild = function({
  utils: {
    status: { show },
  },
  netlifyConfig,
}) {
  show({ summary: 'Test' })
  let i = 150
  while (i--) {
    netlifyConfig.redirects.push({ from: `/one-${i}`, to: `/two-${i}` })
  }
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
