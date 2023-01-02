// //in operator
// let student ={
//     name :"anu",
//     address:"hyd"
// }
// console.log(student);
// console.log(student.name);
// console.log('address' in student);
// console.log(student.hasOwnProperty('name'));

// //if & else
/* let trainee = {
    name :"anu",
    address :"hyd"
}
let hasKey ='name' in trainee;
if(hasKey){
    console.log("the key is exists")
}else {
    console.log("key does not exists")
}; */

// if else

let trainee= {
    name:"anu",
    address:"hyd"
}
let hasKey = 'name' in trainee;
if(hasKey){
    console.log("the key is exists")
}else{
    console.log("the key don't exists")
}
