//Reduce
//from the array if the xpected result is single value:then we can use reduce method
//(min,max,sum)we can get

//sum
arr = [10,40,20,30];
let totalvalue = arr.reduce(function(x,ele){
    console.log("x:"+x+" ele:"+ele);
    return x+ele;
})
console.log(totalvalue);

//assign x value
arr = [10,40,20,30];
let totalvalue1 = arr.reduce(function(x,ele){
    console.log("x:" +x+ " ele:"+ele);
    return x+ ele;
},0)
console.log(totalvalue1);

//max value
arr = [10,40,20,30];
let maxvalue = arr.reduce(function(x,ele){
    if(x>ele){
        return x
    }
    else {
        return x = ele
    }
})
console.log (maxvalue);

//min value
arr = [10,40,20,30];
let minvalue = arr.reduce(function(x,ele){
    if(x<ele){
        return x
    }
    else{
        return x = ele
    }
})
console.log(minvalue);

