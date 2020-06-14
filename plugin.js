const chalk = require('chalk')

module.exports = {
  onBuild() {
    console.log(chalk.red('o'))
    console.log({a:1})
  }
}
