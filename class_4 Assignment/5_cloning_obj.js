//how to copy the object
const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};
//create another circle(object)
const another = {};
for (let key in circle)
another[key] = circle[key];
    console.log (another);

//spread method
const another1 ={...circle};
    console.log(another1);

//assign method //shallow copy
const another3 = Object.assign({},circle);  // here circle is sourse,object is method
      console.log(another3)

circle.radius = 10;
console.log('-------------------------');
console.log(another1);
console.log(another3);