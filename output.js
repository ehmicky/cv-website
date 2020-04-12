const intervalId = setInterval(() => {
  process.stdout.write('a')
}, 1e3)
setTimeout(() => {
  clearInterval(intervalId)
}, 1e4)
