function sum(a,b){
    console.log(arguments);
    return a+b;
}
console.log(sum(2,4));

//console.log(sum(2))  if pass the 1 argument  //ouput is NaN
//console.log(sum(2));

//if pass the more arguments it takes 
//console.log(sum(2,4,5,6,8,2)); // output 6

//function
function sum(a,b) {
    let total =0;
    for(let number of arguments)
       total +=number;
    return total;
}   
console.log(sum(2,2,4,4,2,2));

//Rest operator in functions
function sum(...args){
  let total =0;
  return args.reduce((a,b) => {

    console.log(a , b);
    return a+b
  });
}
console.log(sum(1,2,2,4));