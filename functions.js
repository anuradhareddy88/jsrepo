//named functions
const num1 = 40;
const num2 = 60;
function add () {
    console.log(num1+num2);
}
add();


//2 named function
const firstname = 'pinky';
const lastname = 'sai';
function fullName(){
    console.log(firstname+lastname);
}
fullName();
// named function
function pet(name,color){
    this.name=name;
    this.color=color;
    console.log(`name is ${name} and color is ${color}`);
}
const petOne = new pet('cat','white');
const petTwo = new pet('dog','black');

//anonymous function
(function(){
    const game = 'chess';
    const player = 'harika';
    console.log(`the chess player is ${player}`);
    console.log(`the game is ${game}`);
})
();
//passing the arguments
(function(player,game){
    console.log(`the player ${player} is participating in the ${game}`)
})
('harika','chess');

//return/assign to varaible
const cost =(function(price1,price2){
    console.log(`the result is &{price1 + price2}`);
    return price1+price2;
})
(200,400);
console.log(cost);