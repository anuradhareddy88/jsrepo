// // // filter number
// function numberOnly(arr){
//     return arr.filter(arr=> typeof arr =="string")
// }
// console.log(numberOnly(['anuraha',1,'dany',2,'sai',3]));

// //type string
function stringOnly(arr){
    return arr.filter(arr=> typeof arr == "string");

}
console.log(stringOnly(["anu",1,2,3,"dany",8,6,5,"sai"]));
