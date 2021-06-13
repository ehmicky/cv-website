// eslint-disable-next-line unicorn/prefer-module, import/no-commonjs, import/unambiguous
module.exports = {
  onSuccess({
    utils: {
      status: { show },
    },
  }) {
    show({ summary: 'Test' })
  },
}
