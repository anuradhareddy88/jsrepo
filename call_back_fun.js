//Callbacks are used in arrays, timer functions, promises, event handlers.

//***callback 1 ****//
function greet(name){
    console.log( `hello ${name}`);
}
greet('ridhu');

/* in JavaScript, we can also pass a function as an argument to a function. 
This function that is passed as an argument inside of another function is called a callback function. */

//*** */ callback function 2 ***//
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('callback function');
}

// passing function as an argument
greet('anu',callMe);


//***callback function 3***//
//  program that shows the delay in execution

function say() {
    console.log('Hello world');
}

function person(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(say, 2000);
person('dany');

//***callback function 4 */

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function student(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'karthi', student);

/* the code is executed synchronously.
 The student() function is passed as an argument to the greet() function.

The setTimeout() method executes the greet() function only after 2 seconds. 
However, the student() function waits for the execution of the greet() function.
 */
