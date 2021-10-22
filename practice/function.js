// normal functions
function myFunction(){
    console.log("hello anuradha");
}
myFunction();

//parameters of the function
function myFunction(a,b){
    console.log(a);
    console.log(b);
}
myFunction(8,4);
//console.log(myFunction(8,4));

//return 
function myFunction(a,b){
    a = a+1;
    c= a*b;
    return c
    
}
console.log(myFunction(10,2));

//Example 3 (function scope)
function myFunction(a,b){
    console.log(a,b);
}
console.log(myFunction(2,4));
//console.log(a);

//**reuse parameters *//
function myFunction1(a,b){
    c = a/b;
    return c
}
function myFunction2(a,b){
    console.log(a,b);
}
const a =true,b= null
myFunction1(2,4);
myFunction2(8,9);
console.log(a,b);
console.log(myFunction1(4,6));

//**example 5 */
function sum(a,b){
    c= a+b;
    return c
}
console.log(sum(4,8));

//**what happend after return */
function myFunction(a){
    console.log(a);
    return a//function stops here
    console.log(a);
    const c=10;
    console.log(c);
}
myFunction(2);

//**example 6 **/
function multi(x,y,z){
    multiplication = x*y*z;
    console.log(multiplication);
}
multi(2,2,3);
//without return//
function multi(x,y,z){
    const result=x*y*z;
    console.log(result);
}
multi(2,4,8);

//**chanllenge 7 **/
function concatinatestrings(anu,radha){
    fullname = "anu"+"radha";
    return fullname
}
console.log( concatinatestrings());

//challenge 8//
function  concatinatestrings(str1,str2){
    return  str1+" "+str2;
}
const str3 =  concatinatestrings("anu","radha");
console.log(str3);

//challenge 9//
function  concatinatestrings(a,b){
    const c= a+b;
    console.log(c)
}
concatinatestrings("anu","radha");

//challenge 10//
function outerFunction(a,b){
    function innerFunction(c){
        return  c*c;
    }
    //const sum = a+b;
    //const result = innerFunction(sum);
    console.log(innerFunction(a+b));
}
outerFunction(2,3);

//example 11//
//myFunction is variable
//function ia anonymous function
const myFunction = function(a,b){
    let c ;
    a=a+1;
    c=a+b;
    return c;
};
console.log(myFunction(2,3));

//setTimeout  
setTimeout(function(){
    console.log("this delayed message");
},) ;

//setInterval
//setInterval(function(){
 //   console.log("Mesaage logged each second");
//},);

//setInterval 2
//let i = 1;
//setInterval(function(){
 //   console.log("anuraha"+i);
  //  i = i+1
//},);




    