const chalk = require('chalk')

module.exports.onPreBuild = function() {
  console.log(chalk.red('Test'))
}
