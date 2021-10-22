 const person= {
    name : "anuradha",
    age : 28,
    city: "hyd"
};
console.log(person.name);

//variable
let a =10;
a =20;
console.log(a);
//2 variable

const b = true;
b= false;
console.log(b);


//const varible
const myObject ={};
console.log(myObject);

// exercise 1
let x = 10;
let y = true;
const myObject = {
    a : x,
    b : y
};
console.log(myObject);

// exercise 2
x =false;

const onotherObject= {
    newA : 20,
    a:x,
    b:y,
    c:myObject
};
console.log(onotherObject);

//function

function a(){
    console.log("anuradha");
}
a=10;
a();

//dynamic variable
 let newnum = null;
 console.log(newnum);

 newnum = 15;
 console.log(newnum);

 newnum = false;
 console.log(newnum);

//object variable
myVariable = {
     a:10,
     b:20
}
console.log(myVariable.a);
myVariable.a = 30;
console.log(myVariable);
console.log(myVariable.a);
