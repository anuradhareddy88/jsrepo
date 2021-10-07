let oldcity = false;
let newcity = true;
let city= oldcity || newcity;
console.log(city);

//
let firstname='anu';
let lastname = 'reddy';
let fullname = firstname || lastname;
console.log(fullname);
//
let usercolor = undefined;
let defaultcolor = 'white';
let currentcolor = usercolor||defaultcolor;
if (usercolor && defaultcolor)
    console.log('satisfied');
else
    console.log('NOT SATISFIED');
console.log(currentcolor);

//maping
//reduce

let a = 6;
let b = 4;
[a,b]=[b,a];
console.log(`the value of a is${a} and value of b is ${b}.`);


//string to number conversion
const number='12345';
console.log(parseInt(number));
