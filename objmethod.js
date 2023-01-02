//object method
// let obj ={};
// obj.name ="anu";
// obj.year = 2022;
// obj.speak = function(){
//     return "my name is " + this.name + "and this is year " +this.year
// };

// let newObj = obj;
// obj.year = 2019;
// console.log(newObj.year);

// console.log(newObj.speak());

// //shallowcopy
//const sourceObject = {name:"anu",country:{name:"india"}};
// const sourceObject = {name:"anu",country:"india"}
// //let shallowCopy = sourceObject;
// //let shallowCopy = sourceObject;
// //const shallowCopy = Object.assign({},sourceObject);
// const shallowCopy = {...sourceObject};
// shallowCopy.country = "US";
// console.log(shallowCopy);
// console.log(sourceObject);


// // deepcopy
// let obj ={};
// obj.name ="anu";
// obj.year = 2022;
// obj.address ="hyd";
// obj.speak = function(){
//     return "my name is " + this.name + "and this is year " +this.year
// };
// obj.getInfo = function(){
//     return "my address is" +thid.address
// }


// let deepCopyObj = JSON.parse(JSON.stringify(obj));
// console.log(deepCopyObj);

// // //create object
// let createObj = Object.create(obj);
// console.log(createObj);
// createObj.name = "sachu";
// console.log(createObj.speak());


// //object.entries
// const person ={name:"anu",address:"hyd"};
// let entries = Object.entries(person);
// let keys = Object.keys(person);
// let values = Object.values(person);
// console.log(values);
// console.log(keys);
// console.log(entries);

/* const person ={name:"anu",address:"hyd"};
const frozenObject = Object.freeze(person);
frozenObject.address = "delhi"
person.name ="sachi";
console.log(person);
console.log(frozenObject); */

const person1 ={
    name:"teja",
    address:"hyd"
}
const person2 ={
    name:"anu",
    address:"delhi"
}
console.log(("person1['name']","person2['address']",1===1));
//[person1['name'], person2['address']] = [obj['key2'], obj['key1']];