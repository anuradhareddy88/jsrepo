const fs = require('fs')
//fs.writeFileSync('notes.txt','my name is anuradha')

fs.appendFileSync('notes.text','I live in hyd')

//const add = require ('./utils.js')
//const name = 'anurdha'
//const sum = add (4,2)
//console.log(sum)
const chalk = require('chalk')
console.log(chalk.green.inverse.bold('success'))

//console.log(process.argv[2])
const command = process.argv[2]
if (command==='add'){
    console.log('Adding notes')
}else if (command ==='remove'){
    console.log('Removingg notes')
}
