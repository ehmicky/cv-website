module.exports = {
  onPostBuild({ netlifyConfig: { redirects, headers } }) {
    console.log('Redirects', redirects)
    console.log('Headers', headers)

    redirects.push({
      from: '/this_path',
      to: '/that_path',
    })
    headers.push({
      for: '/example_path',
      values: { HEADER_NAME: 'header_value' },
    })
  },
}
