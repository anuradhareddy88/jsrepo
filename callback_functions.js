// callback functions
//**  function is a block of code that performs a certain task when called.//


function greet(name) {
    console.log('Hi' + ' ' + name);
}

greet('sachu'); // Hi sachu

//callback function_2
//This function that is passed as an argument inside of another function is called a callback function
// function
function greet(name,callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('callback function');
}

// passing function as an argument
greet('siri', callMe);

//callback function  with setTimeout()
function greet() {
    console.log('Hello good morning');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('anu');