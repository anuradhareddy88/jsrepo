// // length

 //const array = [1,2,3,4,5]
// console.log(array.length);


//const array = ['anuradha','yash',1,8.8,true,{"name":"sachai",age:12},{"address":"hyd"},444];
// const array = ['anuradha','yash',1,true,{"address":"hyd"},444];
// console.log(array.length);


// // shift

/* const array = [0,1,2,3,4,5,6];

console.log(array.shift());
console.log(array); */

/* 
const array = ["anu","t","radha"];
console.log(array.shift());
console.log(array); */

// // pop
/* const array = [1,2,3,4,5,6];
console.log(array.pop());
console.log(array); */

/* const array = ["anu","t","radha"];
console.log(array.pop());
console.log(array); */


// // unshift
// const array = [1,2,3,4,5,6];
// console.log(array.unshift(8,5));
// console.log(array);

//const array = ["anu","t","radha"];
//const array2  =[1,2,3,4]
//console.log(array.unshift());
//console.log(array2);

// // push
// const array = [1,2,3,3,4];
// console.log(array.push(8,9,10))
// console.log(array);

/* const array = ["anu","t","radha"];
console.log (array.push("reddy"));
console.log(array); */



// // indexof
/* const array = [1,2,3,4,5,"anu"];
console.log(array.indexOf("anu")) */
/* 
const array = ["anu","t","radha",{name:"yash"}];
console.log(array.indexOf("radha")); */

// // lastindexOf
/* const array =[1,2,3,4,5,6,7,8];
console.log(array.lastIndexOf(1)); */

// // includes
/* const array =[1,2,3,4,5,6,7,8];
console.log(array.includes(12)); */

// const array = ["anu","t","radha"];
// console.log(array.includes("t"));

// //join
// const array =[1,2,3,4,5,6,7,8];
//  console.log(array.join('+'));
// console.log(array.join(''));

/* const array =[1,2,3,4,5];
console.log(array.join(".")); */

// const array = ["anu","radha","reddy"];
// console.log(array.join('.'))

// //reverse
// const array =[1,2,3,4,5,6,7,8];
// console.log(array.reverse());

// const array =["anu","radha","reddy"];
// console.log(array.reverse());

// const array = ["anu","t","radha",6,8];
// console.log(array.reverse());

// // concat
/* const array =[1,2,3,4,5,6,7,8];
console.log(array.concat('+',"anu","9")); */

// const array = ["anu","t","radha"];
// console.log(array.concat('&'));

// const array =["anu","radha"];
// console.log(array.concat('+'));

// // foreach
// const array =[10,20,30];
// array.forEach(function(value,index){
//     console.log(index,value)
// });


// const array =["anu","reddy","radha"];
// array.forEach(function(value,index){
//     console.log(index,value);
// })

/* const array = ["anu","t","radha"];
array.forEach(function(value,index){
    console.log(index,value)
});
 */


// // every
// const array = [1,2,3,4,5];
// var ever=array.every(function(value,index){
//     return value <2;
// });
// console.log(ever)


// // some
/* const array = [1,2,3,4,5];
var ever=array.some(function(value,index){
    return value >6;
});
console.log(ever) */

// const array = [1,2,3,4,5];
// var ever = array.some(function(value,index){
//     return value >4;
// })
// console.log(ever);

// const a =[1,2,3,4,5];
// console.log(a.includes(5));

// // filter
// const array = [1,2,3,4,5];
// const filterArray = array.filter(number=>number>2);
// console.log(filterArray);


//const array = ["anu","t","radha"];
/* const array =[1,2,3,4,5,6]
const filterArray =array.filter(number=>number>2);
console.log(filterArray);
 */
// // filter
// const array = [1,2,3,4,5];
// const filterArray = array.filter(function(value,index){
//     return value>3;
// });
// console.log(filterArray);

/* const array =[1,2,3,4,5];
const filterArray =array.filter(function(value,index){
    return value>3
});
console.log(filterArray); */

// // slice
/* const array =[1,2,3,4,5];
console.log(array.slice(3,4)); */

// // splice
// const array =[1,2,34,5];
// console.log(array.splice(1,22,44,66));
// console.log(array);

// // map
/* const array =[1,2,3,4,5];
const mapArray = array.map(number=>number+2);
console.log(mapArray)
 */

/* const array = [1,2,3,4,5];
const mapArray =array.map(num=>num+2);
console.log(mapArray);
 */
// // map
// const array =[1,2,3,4,5];
// const mapArray = array.map(function(value,index){
//     return value+2;
// });
// console.log(mapArray);

// //map
/* const array =[1,2,3,4,5];
const mapArray = array.map(function(value,index){
    return value+2
});
console.log(mapArray); */

// // map
// const array =[1,2,3,4,5]
// const mapArray =array.map(number=>number+2);
// console.log(mapArray);

//

const array =[1,2,3,6,4,5];
const mapArray = array.map(function(value,number){
    return value +4
})
console.log(mapArray);