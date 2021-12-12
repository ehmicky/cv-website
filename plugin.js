export const onPreBuild = async function({
  constants,
  utils: {
    cache,
    status: { show },
  },
  netlifyConfig,
}) {
  console.log(constants.CACHE_DIR)
  console.log(await cache.list())
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
