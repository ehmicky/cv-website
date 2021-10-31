module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
    console.log(netlifyConfig)
    netlifyConfig.redirects.push({ from: '/one', to: '/two' })
    netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
  },
}
