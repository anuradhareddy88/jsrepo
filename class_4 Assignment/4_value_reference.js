// primitive reference
let x = 10; // primitive copied by their value //deep copy
let y = x;
x = 30;
console.log(y); //x = 30, y =10

// objects are copied by the reference //
let x = {value:10}; // object not scored in the variable.it stored in somewhere memory
let y = x;
x.value = 30;  // x=30 , y=30
  




//value type(independent,premitive)
let number = 10   // copied by their value
function increase(a){
     return ++a;
}
//increase(number);
console.log(increase(10));
console.log(number);  // 10

//reference type;(dependent)
let obj= {value:10};  // copied by reference object
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);   // 11

//enumerating properties of object(for loop)
const circle = {
    radius:1,
    color(){
        console.log();
    }
};

//for (let key in circle)
 //console.log(key,(circle[key]));

//for (let key of Object.keys(circle)) // without object method the loop not run in function
  //  console.log(key);                 //here object is method

for (let entry of Object.entries(circle)) // all functions in js objects
   console.log(entry);

//if('color'  in circle)
   // console.log('yes');
