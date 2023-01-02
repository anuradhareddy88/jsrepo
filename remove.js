// //remove splice
// let array =[1,2,3,4,5];
// for(let i=0;i<array.length;i++){
//     if(i>-1){
//         array.splice(i,4)
//     }
// }
// console.log(array);

//splice if
// let array =[1,2,3,4,5];
// let i= array.indexOf(5)
// if(i>-1){
//     array.splice(i,3)  
// }
// console.log(array);

// //filter method
// let array = [10,20,30,40,40,60,60];
// let value = [40];
// let arrayFilter = array.filter(number=>number!=value);
// console.log(arrayFilter);


// // for method
let array = [1,2,3,4,5];
let search = 4;
let outputArray =[];
let count = 0;
for(let i=0;i<array.length;i++){
    if(array ===search && count ===0){
        count++ ;
    }else{
        outputArray.push(array[i])
    }
}
console.log(outputArray);