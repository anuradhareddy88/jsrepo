// rest operator ... 
//gatjer collect the items

// 1arrays
 const fruits = ['apple','banana','cherrys','mango'];
 const [first,second, ...random] = fruits;
 console.log(first,second,random);

//2 array
const pets = ['dog','cat','rabbit'];
const [second1,...next] = pets;
console.log(second1,next);

//3 array
const num = [1,2,3,4,5,6];
const num2 = [2,4,6,8];
const[first1,...extra]= num;
const rest = num;
console.log(rest);

// 1 object
const person={
    name:'anu',
    lastName:'reddy',
    job:'cosmetologist'
}
const{lastName,...few} = person;
console.log(lastName,few);

//arrow function using with rest 
const testScores = [10,20,33,45,50,64];
const getAverage =(name,...scores)=>{
    console.log(name);
    console.log(scores);
    let total = 0;
    for(const score of scores){
        total +=score;
    }
   // console.log(`${name}`s average score is ${total/scores.length}`)
   console.log(avg=total/scores.length);
   
}

getAverage(person.name,10,20,33,45);
getAverage(person.name,...testScores)
