 // //exercise:1 writen a javscript program to check two numbers  and return true if one of the number is 100 or if the sum of the number is 100

// const isEqualTo100=(a,b)=> a===100 ||b ===100 ||a+b ===100;
// console.log(isEqualTo100(100,0));
// console.log(isEqualTo100(0,100));

// console.log(isEqualTo100(10,0));
// console.log(isEqualTo100(0,10));

// // exercise:2 write a javascript program to get the extension of the file name

// const getFileExtension=(str)=>str.slice
// (str.lastIndexOf('.'));
// console.log(getFileExtension('index.html'));

//***************************   exercise:3                */

// // to replace every character in a given string with the character following it in the alphabet
// const moveCharsForward =(str)=>
// str
// .split('')
// .map(char=>String.fromCharCode(char.charCodeAt(0)+1))
// .join('');

// console.log(moveCharsForward('abcd'));

// const moveForword =(str)=>str.split('').map(char=>String.fromCharCode(char.charCodeAt(0)+1))
// .join('')
// console.log(moveForword('abcd'));

//**************   exercise 4              */

// // exercise:4   write a program to get the current date mm-dd-yyyy,mm/dd/yyyy
// const formateDate =(date=new Date())=>{
//     const days = date.getDate();
//     const months = date.getMonth()+1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`;
// }
// console.log(formateDate());

// *************** exercise:5****************//
// create new string adding "New!"in front of given string.iff the given string begins with"new!" alreadythen return the original string
//const addNew =(str)=>`New! ${str}`;
// const addNew =(str)=>
// str.indexOf('new!')===0?str:`new! ${str}`
// console.log(addNew(" anuradha"));

const array =[1,[2,[3,[4]]]];
console.log(array);



//**********************      exercise6     ******************** */

//// to create a new string from a given a string taking first 3 characters and last three characters of the string
// // the string length must be 3 or more , if not the original string is returned

// const makeNewString = (str)=>
// str.length<3?str:str.slice(0,3)+str.slice(-3);
// console.log(makeNewString('abc'));
// console.log(makeNewString('abcdefgh'));
// console.log(makeNewString('anuradhareddyt'));


//********************* exercise 7 ***************** */
// // to extract the half of a stringof even length // //
// const firstHalf =(str)=>str.slice(0,str.length/2);
// console.log(firstHalf('anuradha'));

// //*************************  exercise 8 ******************** */
// // to to concatenate two strings except their first character
// const concatenate=(str1,str2)=>
// str1.slice(1) +str2.slice(1);
// console.log(concatenate('abc','def'));
// console.log(concatenate('aanu','rradha'));

// ************************** exercise 9 *******************//
// // given two values ,write a javascript  program to find out     which one is nearst to 100
// const nearst100 =(a,b)=> (100-a)<(100-b)? a:b;
// console.log(nearst100(20,40));

//*********************** exercise 10**************** */
// // to check a given string contains 2 to 4 occurances of a specified characters
// const countChars =(str,char)=>
// str.split('').filter(ch =>ch === char).length;
// const contains2to4 =(str,char)=>
// countChars(str,char)>= 2 && countChars(str,char)<=4;
// console.log(contains2to4('ohhh','h'));
// console.log(contains2to4('ooooh','o'));
// console.log(contains2to4('oooh','o'));
// console.log(contains2to4('oh','o'));

// //************* exercise 11**************** */
// // to find the evene digits in  a an array of intergers
// const evennumbers=(array)=>
// array.filter(num=>num %2 ===0).length;
// console.log(evennumbers([2,3,4,5,6,8,10]));

// //************* exercise 12**************** */
// // to find the number of even valuesup to given number
// const createArrayOfNumbers=(num)=>{
//     const returnArray =[];
//     for(let i=1;i<=num;i++){
//         returnArray.push(i);
//     }
//     return returnArray;
// }
// const countEvenNumbers=(array)=>
// array.filter(num=>num%2===0).length
// console.log(countEvenNumbers(createArrayOfNumbers(120)));

// //************* exercise 13**************** */
// //to check whether agiven array of intergers is sorted in assending order
//  const isAssending =(arr)=>{
//     for(let i=0;i<arr.length;i+=1){
//         if(arr[i+1]<arr[i])return false;
//     }
//     return true
//  }
//  console.log(isAssending([1,2,,3,4,5,6,7,8]));
//  console.log(isAssending([1,2,,3,4,9,5,6,7,8]));

// //************* exercise 14**************** */
// //to get largest number in array of integer
// const largestEvenNum=(arr)=>Math.max(...arr.filter(num=>num %2===0));

// console.log(largestEvenNum([1,2,3,45,5,66,7,88]));

// //************* exercise 15**************** */
// // to replace the first digit in string(should contains at least digit) with $ character

// const replaceFirstDigit = (str) => (str.replace(/[0-9]/,"$"));
// console.log(replaceFirstDigit('anu123radha'));
// console.log(replaceFirstDigit('a1n866u123radha'));

// //************* exercise 16**************** */
// // given a yest report if it is a leaf year
// const isLeafYear=(year)=>year % 4 === 0;
// console.log(isLeafYear(1998))
// console.log(isLeafYear(2008))
// console.log(isLeafYear(2002))
// console.log(isLeafYear(1988))


// //************* exercise 17 **************** */
// // to compare two objectsto determineif the first one contains the same properties/
// // as the secondone(which may have the additional properties)

// const objA ={a:1, b:2,c:1};
// const objB ={a:1, b:1, c:1};
// const objC ={a:1,b:1, d:1};

// const objectEqual =(a,b)=>
// Object.keys(a).every(key=>b[key]);

// console.log(objectEqual(objA,objB))
// console.log(objectEqual(objA,objC))
// console.log(objectEqual(objB,objC))


// //************* exercise 18 **************** */
// // to convert a comma -separated values(csv) string to a 2D array.A new line indicates a new row in the array
/* const parseCSV =(csvString)=>
csvString.split('/n').map(row=>row.split(','))

const str = `abs,gbs,klt
jky,edu,vny
cck,kkl,wkp`;

console.log(parseCSV(str));
 */

// //************* exercise 19 **************** */
// // to generate a random hexadecimla color code
/* const getRandomHexNumber=()=>
Math.floor(Math.random()*16).toString(16);

const getRandomHexColor=()=> '#'+Array.from({length:6}).map(getRandomHexNumber).join('');
 
console.log(getRandomHexColor());
 */


// //************* exercise 20 **************** */
 /* write a jvascript function that returns true if the provided predicate function returns true
for all elements in a collection,false otherwise
 */

/* const isEvetyIteam=(array,fn)=>{
    for(let i =0;i<array.length;i++){
        if(!fn(array[i])){
            return false
        }
    }
    return true;
}
const array = [1,2,3,4,5];
console.log(array.every(array=>array>0));
console.log(array.every(array=>array>4));
console.log(array.every(array=>array>8));
 */


// //************* exercise 21 **************** */
// //write a javascript function that returns a passing string with letters in alphabetical order

/* const alphabeticalOrder=(str)=>
str.split('').sort((a,b)=>a>b ?1:-1).join('');
console.log(alphabeticalOrder('anuradha'));
 */

// //************* exercise 21 **************** */
// //write a javascript function accept a string as a parameter and count the vowels with in the string

/* const countVowels=
(str,letters =['a','e','i','o','u'])=>
str.split('').filter(s=>letters.indexOf(s)>-1).length;
console.log(countVowels("anuradhayash")); */


// //************* exercise 22 **************** */
/* write a javascript function conver an amount of coins
example:46 and possible coins 25,10,5,2,1
output:25,10,10,1
 */

/* function convertCoins(amount, coins = [25, 15,5,5]) {
    let totalCoins = [];
    let j = 0;

    while (amount > 0) {
        if (amount >= coins[j]) {
            amount -= coins[j];
            totalCoins.push(coins[j]);
        }

        if (amount < coins[j]) {
            j++;
        }
    }
    return totalCoins;
}
console.log(convertCoins(65)); */


// //************* exercise 23 **************** */
// //write a javascript function to exyract unique characters from a string

/* const array = ['anu','anu','radha','radha'];
const unique = [...new Set(array)];
console.log(unique);
 */

/* const getUniqueChar =(str)=>
str.split('').filter(
    (item,index,arr)=>
    arr.slice(index+1).indexOf(item)=== -1
);
console.log(getUniqueChar('aaaccvvvbbba')); */


// //************* exercise 24 **************** */
// write javascript function to find the first not repeated character

/* const getNonRepeatedChar =(str)=>
str.split('').filter((item,index,arr)=>
arr.filter(arrItem=>arrItem===item).length===1);
console.log(getNonRepeatedChar('aaaccvvvbbbaezA'));
 */

// //************* exercise 2 **************** */
// write javascript function to check two numbers and return true if one nuber is 100 orif the sum of the two number is 100

/* const checkNumber =(a,b)=>
    a===100 ||b===100 || a+b===100
console.log(checkNumber(0,100));
console.log(checkNumber(100,0)); */

/* const a =[
    {
        name:"anu",age:25
    },
    {
        name:"radha",age:26
    }
]
let sum = []

for (i=0;i<a.length;i++){
    total = a.age+a.age;
    //total.push(sum);
    return total;

} */

/* const arr = [{
    a: 12,
    b: { a: 12, c: { a: 12 } },
    c: 17
  },
  {
    a: 12,
    b: { a: 12, c: { a: 12 } },
    c: 17
  },
  {
    a: 12,
    b: { a: 12, c: { a: 12 } },
    c: 17
  }
];

const deepMergeSum = (obj1, obj2) => {
  return Object.keys(obj1).reduce((acc, key) => {
    if (typeof obj2[key] === 'object') {
      acc[key] = deepMergeSum(obj1[key], obj2[key]);
    } else if (obj2.hasOwnProperty(key) && !isNaN(parseFloat(obj2[key]))) {
      acc[key] = obj1[key] + obj2[key]
    }
    return acc;
  }, {});
};

const result = arr.reduce((acc, obj) => acc = deepMergeSum(acc, obj));
console.log('result: ', result); */


// const arr = [{
//     a: "anu",
//     b: 20,
//     c:2
//   },
//   {
//     a: "radha",
//     b: 40,
//     c:2.2
//   },
//   {
//     a:"reddy",
//     b:40,
//     c:2.2
//   }
// ];

// const mergeSum = (obj1, obj2) => {
//   return Object.keys(obj1).reduce((acc, key) => {
//     if (typeof obj2[key] === 'a') {
//       acc[key] = mergeSum(obj1[key], obj2[key]);
//     } else if (obj2.hasOwnProperty(key) && !isNaN(parseFloat(obj2[key]))) {
//       acc[key] = obj1[key] + obj2[key]
//     }
//     return acc;
//   }, {});
// };

// const result = arr.reduce((acc, obj) => acc = mergeSum(acc, obj));
// console.log('result: ', result);
