module.exports = {
  onPreBuild({ utils: { status: { show } } }) {
    console.log('\x1B]8;;a b\x07a\x1B]8;;\x07')
    show({ summary: 'Test' })
  }
}
