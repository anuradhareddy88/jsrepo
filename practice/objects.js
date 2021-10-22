//dot notation objects//***dot notation */
const myCity= {
    city : "hyd",
    popular : true,
    country : "india"
};

console.log(myCity.city);
console.log(myCity.country);
console.log(myCity.popular);

//modify properties of the object//
const bigCity={
    city : "delhi",
};
bigCity.city1="kolkota";
//console.log(bigCity);
//object notation
//console.log(bigCity.city);
console.log(bigCity);

//add properties

const bigCity={
    city:"hyd"
};

bigCity.popularity = true;
//bigCity.country = "india";
//console.log(bigCity);
//console.log(bigCity.city);
delete bigCity.city;
bigCity.pinNum=35678;
console.log(bigCity);
console.log(bigCity.pinNum);
 delete bigCity.pinNum;
 console.log(bigCity);

                  //**bracket notation* **/

const myCity={
    city :"hyd",
    pinNum:889656
}  
//add properties
myCity["popular"] =true;
console.log(myCity);
const propertycountry = "country" ;
myCity[propertycountry] = "india" ;
myCity[propertycountry] = "usa";
console.log(myCity) ;   


//ecercise 4
const myPost ={
    postTitle :"object is reference type",
    postLikes : 0,
    shared : false,
};
console.log(myPost);
myPost.postLikes = 1;
console.log(myPost);
delete myPost.shared;
console.log(myPost);

//exercise 5 objects
let myObject ={a:10};
let copyOfMyObject=myObject;
copyOfMyObject.b = false;
console.log(myObject);
console.log(copyOfMyObject);

//exercise 6 object

let myObject ={
    a:10,
    b:true,
    c:false
};
console.log(myObject["a"]);
const property = "c";
console.log(myObject[property]);
console.log(myObject.b);

//challenge 7

const objectWithNestedObject ={};
objectWithNestedObject.nestedObject={};
objectWithNestedObject.nestedObject.a= null;
const property = "b";
objectWithNestedObject.nestedObject[property]=true;
console.log(objectWithNestedObject);

//challenge 8

const myCity ={
    city :"hyd",
    cityGreeting:function() {
        console.log("hello anuradha")
    }
};
myCity.cityGreeting();
console.log(myCity.city);
console.log(myCity);

{"name":"anuradha","profession":"cosmetologist","hobby":"painting"}
