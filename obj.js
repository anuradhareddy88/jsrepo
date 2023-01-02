// var obj = {};
// console.log(obj);

// obj['message'] ="Hello";
// console.log(obj);

// obj.message ="Hii";
// console.log(obj);

// var person ={
//     name :"anu",
//     address:"sr nagar",
//     city:"hyd"
// }
// console.log(person.hasOwnProperty('name'));
// delete person.name;
// console.log(person.hasOwnProperty('name'));

// // object
// let student = {
//     name :'johnny',
//     age :28,
//     hobbies :['reading','teaching'],
//     greet:function(){
//         console.log("johnny tutorials");
//     },
//     score :{
//         react:80,
//         angular:20
//     }
// }
// delete student.age;
// console.log(student);

// delete student['score'.react];
// console.log(student);


// // replace

// const text ="he is a good person";
// const pat = "he";
// console.log(text.replace(pat,"she"));

// //replace All
// const text ="he is a good person,he looks good";
// const pat = "he";
// console.log(text.replaceAll(pat,"she"));

// const text ="he is a good person,he looks good";
// console.log(text.replace(/he/gi,"she"));

const search =' ';
const repl = '#';
const result = "dog dog go".replaceAll(search,repl);
console.log(result);
