// for loop
for(let i = 0; i<5; i++){
    console.log(i);
}

for (let i = 0;i<=6;i++){
    console.log(i);
}

//array loop
const array=["anu","radha","yash"];
for (let i=0;i<array.length;i++){
    console.log(array[i]);
}
// array loop
const newArray =["siri","dany","susi"];
for(let i=0;i<newArray.length;i++){
    console.log(newArray[i]);
}

//while loops
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//while loop
let i=0;
while(i<8){
    console.log(i);
    i++;
}

let i =10;
while(i<10){
    console.log(i);
    i++;
}

//do whileloop
let i =10;
do{
    console.log(i);
    i++;
}while (i<5);

//for in loops with my objects
const myObject ={
    x:10,
    y:20,
    z:30
}
for(let n in myObject){
    console.log(n,myObject[n]);
}

//for loop in with array
const array=["dany","anu","sachu"];
for(let  person in  array){
    console.log(person,array[person]);
}

//for loop of with array
const array1 = ["susi","deepu","raji"];
for(let person of array1){
    console.log(person);
}
