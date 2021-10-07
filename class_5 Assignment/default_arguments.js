//default parameters
function interest(principal,rate=3.5,years){
    return principal*rate/100*years;
}
console.log(interest(1000,undefined,5));
//rate is default parameter


//getters and setters
//getters=>access properties
//setters=>change(mutate)them
const person = {
    firstName:'anu',
    lastName : 'reddy',
    //fullName:function(){};
    //function fullName(){};
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
     set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    } 
};
person.fullName='siri reddy';
//console.log(person.fullName);
console.log(person);