export const onPreBuild = async function({
  utils: {
    run,
    build: { failBuild },
    functions,
    cache,
    status: { show },
  },
  netlifyConfig,
}) {
  await run('echo', ['oh'])
  await run.command('echo ah')
  console.log(await functions.list())
  console.log(cache.save.toString())
  failBuild('test')
  show({ summary: 'Test' })
  netlifyConfig.redirects.push({ from: '/one', to: '/two' })
  netlifyConfig.headers.push({ for: '/couleur', values: { BLUE: 'bleu' } })
}
