//Asynchronous//
function person(){
    console.log(person);
}
function name(){
    console.log(name);
}
function color(){
   console.log(color);
}
setTimeout(name,0);
person();
color();

//Asynchronous 2
function car(){
    console.log('car')
}
function train(){
    console.log('train')
}
function main(){
    console.log('main');
    setTimeout(car,1000);
    train()
    //console.log('main');
}
main();

//***Promise***//
function walk(){
    console.log('walk');
}
function run() {
    console.log('run');
}
function stand() {
    console.log('stand');
    setTimeout('walk',0);
    new Promise(function(resolve,reject){
        resolve('Promise');
    }).then(resolve=>console.log(resolve))
     run();
}   
stand();
