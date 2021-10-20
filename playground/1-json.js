/* const fs = require('fs')
const book= {
    title:'tell me your dreams',
    author:'sidny sheldon'
}
const bookJSON = JSON.stringify(book)
//console.log(bookJSON)

//const parsedata =JSON.parse(bookJSON)
//console.log(parsedata.author)
fs.writeFileSync('1-json.json',bookJSON) */

const fs= require('fs')
//const { json } = require('stream/consumers')
//const { json } = require('stream/consumers')
const dataBuffer=fs.readFileSync(1-json.json)
const dataJSON = dataBuffer.toString()
//console.log(databuffer)
const user = JSON.parse
user.name ='siri'
user.age = 25

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)