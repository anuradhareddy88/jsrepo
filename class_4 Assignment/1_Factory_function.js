// Factory function

function createName(anuradha){
    return{
        anuradha,
        draw(){
            console.log('draw');
        }
    };
}

const name1 = createName(1);
console.log(name1);
const name2 = createName(2);
console.log(name2); 

//function creation
let me = 'anu';
function greetme(){
    console.log('hello '+me +' !')
}
//me ='anuradha'
greetme()
 