// var unique =[];
// function getUnique(array){
//     for(let i=0;i<array.length;i++){
//         if(unique.indexOf(array[i])== -1){
//             unique.push(array[i])
//         }
//     }
//     return unique;
// }


//var array=[1,2,3,4,4,4,5,5,6,6,8,8];
var names={
    "country":"india",
    "city":"hyd",
    "country" :"india"

}
const unique = [...new Set(names)];
// var unique = getUnique(names);
// console.log(unique);

// // filter

// const array = [1,2,2,3,3,3,4,4,5,5];
// const unique = [... new Set(array)]
// console.log(unique);