//mutation
// const person1 ={
//     name:"rama",
//     address:"hyd"
// }
// const person2 = person1;
// person2.name = "sita";
// console.log(person1);
// console.log(person2);

// // Object.assign method
// const person1 = {
//     name:"rama",
//     address:"hyd"
// }
// const person2 = Object.assign({},person1)
// person2.name="sita";
// console.log(person1);
// console.log(person2);

// // spread method
// const person1 = {
//     name:"rama",
//     address:"hyd"
// }
// const person2 = {...person1};
// person2.name="sita";
// console.log(person1);
// console.log(person2);

// //freeze method(for single object)
const person1 = {name:"rama"};
Object.freeze(person1);
person1.name ="hanuman";
person1.name ="sita"
console.log(person1);
