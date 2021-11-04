/*
 * @Author       : djkloop
 * @Date         : 2020-08-15 17:21:22
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-12-17 19:34:45
 * @Description  : 头部注释
 * @FilePath      : /wisewe-form2/tools/lib/build.js
 */
const chalk = require('chalk')
const ora = require('ora');
const fs = require('fs');
const { exit } = require('process');
const shell = require('shelljs')


let spinner
const log = console.log
const context = process.cwd()

async function createBuildTask(args) {
    const isAll = args.all || Object.keys(args).length === 0
    const tips = chalk.redBright.bold(isAll ? 'all packages' : args.packages.join(', ') + ' packages')
    const packageCreateTips = chalk.blue.bold('create-wisewe-form-build-task: ')
    const packageCreateBuildingTips = chalk.yellow.bold('create-wisewe-form-build-task-building: ', tips)
    const packageCreateFinishSuccessTips = chalk.green.bold('create-wisewe-form-build-task-success: ', tips)
    const packageCreateFinishErrorTips = chalk.redBright.bold('create-wisewe-form-build-task-error: ')
    spinner = ora(packageCreateTips, tips).start();
    /// default core packages
    const defaultPkgs = ['core', 'data']
    /// 如果是打包全部
    if (isAll) {
        spinner.text = packageCreateBuildingTips + '\n';
        shell.exec('lerna run build', (code) => {
            if (code !== 0) {
                exit(code)
            } else {
                spinner.succeed(packageCreateFinishSuccessTips)
                exit(code)
            }
        })
    } else {
        spinner.text = packageCreateBuildingTips + '\n';
        args.packages.forEach((scope) => {
            const isExists = fs.existsSync(context + '/packages/' + scope)
            /// check packages folder exists package
            if (!isExists) {
                spinner.fail(packageCreateFinishErrorTips + chalk.red.bold(`In the packages folder no [${scope}] package name, Please check packages folder have [${scope}] name.`))
                exit(1)
            }
        })
        /// building
        const addPrefix = '--scope @wisewe-form/'
        const packagesNames = []
        defaultPkgs.concat(args.packages).forEach(scope => {
            packagesNames.push(addPrefix + scope)
        })
        /// lerna command
        const lernaBuildPackagesCommand = `lerna run build ${packagesNames.join(' ')}`
        shell.exec(lernaBuildPackagesCommand, (code) => {
            if (code !== 0) {
                exit(code)
            } else {
                spinner.succeed(packageCreateFinishSuccessTips)
                exit(code)
            }
        })

    }
}

module.exports = (_, args) => {
    return createBuildTask(args)
}