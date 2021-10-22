//function scope
function sum(a,b){
    function multi(a,b){
        return a*b
    }
    //const result =multi(3,4);
    console.log(multi(3,4));
    return a+b;
}
const result = sum(2,4);
console.log(result);

//use strict
 a = 10;
 function myfn(){
     "use strict";
     b= 5;
 }
 myfn();

 //setTimeOut function
 setTimeout( function myfn(){
     console.log("hello everyone");
 },1000);

 myfn();
