/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-10-24 14:45:12
 **/

const fs = require('fs')
const symlinkSycn = fs.symlinkSync

// symlink的作用是将文件或者文件夹在其他地方做个映射，映射出来的文件会根据源文件的更改而发生改变
const symRes = symlinkSycn(`${__dirname}/source/click.js`, `${__dirname}/target/click.js`)

console.log('symRes is ', symRes)
