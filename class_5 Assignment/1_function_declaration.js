//Function Declaration
//hoisting(in function declaration js run the function on top of file)
walk();
function walk(){
    console.log('walk');
}
 

//Function expression (if function is empty Anonymous function)
let run = function(){
    console.log('run')
} ;
run() ; 
//move and run get the same result
let move = run;
move();
    
