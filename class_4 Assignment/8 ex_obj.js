 let address ={
    city : 'a',
    street:'b',
    pincode: 'c'
};

function showAddress(address){
    for(let key in address)
    console.log(key,address[key]);
}

showAddress(address);
 
//Factory function

function createAddress(city,street,pincode){
    return {
        city:'hydearabad',
        street:'ramnagar',
        pincode:50038
    };
}
let address2=createAddress();
console.log(address2);

//constructor function
function Newaddress(street,city,pincode){
    this.street = street,
    this.city = city,
    this.pincode = pincode
}
let address3 = new Newaddress('kphb','hyd',500039);
console.log(address3);