const { promises: fs } = require('fs')

const pathExists = async function(path) {
  try {
    await fs.access(path)
    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  async onPreBuild({ constants: { CACHE_DIR }, utils: { cache } }) {
    console.log({ CACHE_DIR })
    console.log(await cache.list())
    console.log(await cache.has('gulpfile.js'))
    console.log(await pathExists('gulpfile.js'))
    console.log(await cache.save('gulpfile.js', { move: true }))
    console.log(await cache.list())
    console.log(await cache.has('gulpfile.js'))
    console.log(await pathExists('gulpfile.js'))
    console.log(await pathExists('/opt/build/cache/cwd/gulpfile.js'))
    console.log(await fs.readdir('/opt/build/cache/'))
    //console.log(await fs.readdir('/opt/build/cache/cwd/'))
  }
}
