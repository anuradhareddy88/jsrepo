const person ={
    name :'anu'
};

person.color='white';
person.walk = function(){
    this.run = 'fast'
    return 'siri'
}

//delete person.color;
//delete person.walk;

console.log(person.walk());
const abc = new person.walk()
console.log(abc.run)


