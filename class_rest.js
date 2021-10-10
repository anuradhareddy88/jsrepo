//class using rest
class Pets{
    constructor(first,...arr){
        this.arr = arr
    };
    methodOne(){
        console.log(`${this.arr}`)
    };
}

const Pet1 = new Pets("cat","dog","bird");
//const Pet2 = new Pets("red","blue",'red');

Pet1. methodOne();

//class
class House {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  console.log(new House(4, 3).area);