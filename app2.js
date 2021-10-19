const { string, argv } = require('yargs')
const yargs = require('yargs')
console.log(process.argv)
console.log(yargs.argv)

// create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    handler:function(){
        console.log('adding a new note!')
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demondOption:true,
            type:string
        },
        body:{
            describe:'body note',
            demonOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('removeing a note')
        console.log('title:'+ argv.title)
        console.log('body:'+ argv.body)
    }
})

//challenge
yargs.command({
    command:'list',
    describe:'list value',
    handler:function(){
        console.log('message for now')
    }
})

//challenge 2
yargs.command({
    command:'read',
    describe:'read value',
    handler:function(argv){
        console.log('meassage for now',argv)
    }
})
console.log(yargs.argv)