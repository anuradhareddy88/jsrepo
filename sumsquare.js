//logic 1
// function sumSqDiff(number){
//     var sOfSqu =0;
//     var sqofSum = 0;
//     for(let i=0;i<number;i++){
//         sOfSqu = Math.pow(i,2);
//         sqofSum +=i;
//     }
//     sqofSum = Math.pow(sqofSum,2);
//     return sqofSum - sOfSqu;

// };
// console.log(sumSqDiff(4));

// // logic 2
function sumSquareDifference(n){
    const sumofSquare =()=>{
        let total = 0;
        for(let i=0;i<=n;i++){
            total +=(i**2);
        }
        return total;
        
    }
    const squareOfSum =()=>{
        let total=0;
        for(let i=0;i<=n;i++){

            total+=i;
        }
        return total**2;
    }
    const answer =  squareOfSum()-sumofSquare();
    return answer;
}
console.log(sumSquareDifference(10));
