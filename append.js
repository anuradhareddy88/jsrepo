// // push

// var names = ["anu","dany","sai"];
// names.push("yash","sachi","ridhu");
// //console.log(names);
// for(let i=0;i<names.length;i++){
//     console.log(names[i],names)
// }

 

// // concat
/* let names =["anu","dany","sachi"];
names = names.concat(["xxx","ridhu","krishna"]);
console.log(names);
 */

// //unshift
// var n =[1,2,3,4,5];
// n.unshift(8);
// console.log(n);

// // spread
/* // const names =["anu","dany","sachi"];
// const newNames = [...names,"ridhu"];
// console.log(newNames);
 */

// // includes 
// const array = ["anu","dany","sai"];
// console.log(array.includes("ridhu"));


// // arrow function
/* const names = ["anu","dany","sai"];
const newNames =names.some(x=>x==="ridhu");
console.log(newNames); */



// console.log( typeof typeof typeof true);

function palindrome(){

    const s = "A man, a plan, a canal: Panama";
     const n = s.length;

    let ans = "";
    
    for(let i=0;i<n;i++){
        if( s.charAt(i)>='A' && s.charAt(i)<='Z'){
            // console.log("test ",s.charCodeAt(i));
            ans = ans +( s.charCodeAt(i) -'a');
        }
        else if(s.charAt(i)>='a' && s.charAt(i)<='z'){
            ans = ans + s.charCodeAt(i);
            // console.log("test",ans);
            }
        }
        // console.log(ans);
        let start = 0;
        let e = ans.length-1;
        while(start<e){
            if(ans.charCodeAt(start) != ans.charCodeAt(e)){
                return false;
            }
            start++;
            e--;
        }
        return true;
        
    }
    console.log("ans is ",palindrome());
    