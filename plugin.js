module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    const link = '\x1b]8;;https://www.netlify.com\x07Netlify\x1b]8;;\x07'
    console.log(link)
    show({ summary: `Test ${link}` })
  }
}
