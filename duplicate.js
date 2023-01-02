// // use new Set
// const array = [1,2,2,3,3,3,4,4,5,10,10,20,20,30];
// let count = 0;
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]==array[j]){
//         count++;
//         break;
//         }
//     }
// }
// console.log("duplicate elements are::"+count);

//console.log(array);

// // count accurance in each element in the array
// let a =10;
// let b = (a>18)?console.log("elegible for voting"):console.log("not elegible");

 let array =[1,1,2,2,2,2,3,34,5,5,6,6,7,8,8,9];
let count = {};
for(let i =0;i<array.length;i++){
    let num = array[i];
    count[num]=count[num]?count[num]+1:1;
}
console.log(count); 

// // duplicates
/* const array =[1,1,2,2,2,3,3,4,4,5,5,6];
const unique = [...new Set(array)];
console.log(unique); */





