//// uppercase
// let person = "anuradah Reddy";
// console.log(person.toUpperCase());

// // lowercase
// let person ="YASHWANTH SIMHA";
// console.log(person.toLowerCase());

// // split
// let person ="YASHWANTH SIMHA";
// console.log(person.split( " "));

// // join
// let persons = ["anu","radha","dany"];
// console.log(persons.join());

// // forloop
// for(let i=0;i<10;i=i+4){
//     console.log(i)
// };

// //arrow function
// let hello = (val)=>"hello"+val;
// console.log(hello("anu"));

// // function
// function hello(val){
//     console.log("hello"+val)
// }
// hello("johnny");

// //   map
// let numbers = [16,25,36];
// let result = numbers.map(Math.sqrt);
// console.log(result);

// let numbers = [16,25,36];
// let result = numbers.map(number=>number+20);
// console.log(result);

// // alternative function
// function alternative(s){
//     let char = s.toLowerCase().split("")
//     for(let i=0;i<char.length;i=i+4){
//     char[i] =char[i].toUpperCase(); 
//     }
//     return char.join("")
    
// }
// console.log(alternative("anuradhareddy"));

// //map methid
let s ="anuradhareddy";
result = s.split("").map((latter,i) => (i%3)==0?
latter.toUpperCase() : latter.toLowerCase())
.join("");
console.log(result);
