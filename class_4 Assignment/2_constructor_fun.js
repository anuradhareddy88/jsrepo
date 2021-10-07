function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
        return 'hello'
    }
}

const circle1 = new Circle(1);
console.log(circle1.draw());
const circle2 = new Circle(2);
console.log(circle2);
console.log(circle2.radius);

//Circle.call({},1);  //Circle function working as a object
//Circle.apply({},1);