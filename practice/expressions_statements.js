//expressions
const myObject={
    a:10,
    b:true
};
//console.log(delete myObject.a);
delete myObject.a;
console.log(myObject);

//function
let a =10;
function fn(){
    console.log("greeting from the 'fn' function");
    return function (a){
        console.log(a);
    };
}
fn()
(true)

//function
let a =10;
let b=20;
let c=5;
let d=4;
function firstFunction(a,b){
    sum = a+b;
    console.log(sum)
   
    //x= c+d;
    //return x;
}
firstFunction(a,b);
// function
const secondFunction = function(a,b){
    sum1 = a+b;
    return sum1;
};
const newFunction=secondFunction;
console.log(newFunction);

