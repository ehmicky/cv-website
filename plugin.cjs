module.exports = {
  onPreBuild({
    utils: {
      status: { show },
      git,
    },
    netlifyConfig,
  }) {
    show({ summary: 'Test' })
    netlifyConfig.redirects.push({ from: '/one', to: '/two' })
    netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
    console.log(git)
  },
}
