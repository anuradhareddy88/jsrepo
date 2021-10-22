const myarray= [1,2,3,4];
console.log(myarray);
const myarray1 = new Array(1,2,3,4);
const myarray2 = new Array(5,5,6,7);
console.log(myarray2);
console.log(myarray1);

//myarray===myarray1;

//read array values
const myarray = [1,2,3,4,5];
console.log(myarray[4]);
console.log(myarray.length);

//inserting array
myarray[2]="anu";
console.log(myarray);
myarray[5]="radha";
console.log(myarray.length);
//pushing elements in array
const myarray=[1,2,3,4,5];
myarray.push(2);
console.log(myarray);

//eleminate (pop) remove elment form last
const myArray=[4,5,6,7,8];
myArray.pop();
console.log(myArray);

//remove element from first(shift)
const myArray=[1,2,3,4];
myArray.shift();
console.log(myArray);
const removeElement = myArray.shift();
console.log(myArray);
console.log(removeElement);

//pushing the elemnets elemnts foem the starting(unsgift)
const myArray=[1,2,3,4];
myArray.unshift("anu");
console.log(myArray);
myArray.unshift("t");
console.log(myArray);

//create empty array
const myArray = [];
 myArray[0]= "dany";
console.log(myArray.length);
myArray[1] = "yash";
console.log(myArray);
myArray.push("anu");
console.log(myArray);

const array = [1,2,"anu",{}];
array[3].newProp = 10;
console.log(array);
console.log(array[3].newProp);
console.log(array[3]["newProp"]);

//comppare arrays
const myArray1= [1,2,3,4];
const myArray2=[1,2,3,4];
console.log(myArray1===myArray2);
const copyOfMyArray1 = myArray1;
console.log(copyOfMyArray1===myArray1);
//compare to string
console.log(myArray1.toString()===myArray2.toString());

//challenges
const newArray = [1,2,3,4];
newArray[0]="hello";
newArray[2]=100;
console.log(newArray);
//unshift
newArray.unshift ("hello");
console.log(newArray);
newArray.unshift ( 100);
console.log(newArray);

//challenge2
const extraArray=[1,2,3,4,11];
extraArray[4]="anu";
extraArray[10]="abc"
console.log(extraArray)
console.log(extraArray.length);
//create arrayobjects
const arrayOfCars=[{
    car1:{
        carBrabd:"maruthi",
        carPrice:10000
    },
    car2:{
        carBrand:"bmw",
        carPrice:4000000
    },
    car3:{
        carBrand:"skoda",
        carPrice:200000
    },
}]

const newCar={car4:{craBarbd:"tesla",carPrice:40000}};
arrayOfCars.push(newCar);
console.log(arrayOfCars);