// eslint-disable-next-line unicorn/prefer-module, import/no-commonjs, import/unambiguous
module.exports = {
  onPreBuild({
    utils: {
      status: { show },
    },
  }) {
    show({ summary: 'Test' })
  },
}
