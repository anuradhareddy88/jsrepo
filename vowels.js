// //length
/* let str ="anurdha reddy T";
console.log(str.length);
 */
// // toString
/* let name = "anuradha";
console.log(name.toString()); */

// // charAt
/* let name = "yashwanth";
console.log(name.charAt(2)) */

// //match
/* var name = "anuradha reddy";
console.log(name.match(/[^n]/g)); 
  */
// // replace
/* var name = "anuradha";
var newName = name.replace("anu"," Y yash");
console.log(newName);
 */
// // vowels count
function countVowels(s){
    vowelCount =0;
    var string = s.toString()
    for(let i =0;i<string.length-1;i++){
        if(string.charAt(i)=="a"||string.charAt(i)=="e"||string.charAt(i)=="i"
        ||string.charAt(i)=="o"||string.charAt(i)=="u");
        vowelCount+=1;
    }
    return vowelCount;
};
console.log(countVowels("anuradha is a cosmetologist and software engineer"));
console.log(countVowels("anuradha reddy thurpu"));

/* function countVowels(s){
    vowelCount=0; 
    let string = s.toString()
    for(let i=0;i<string.length;i++){console.log(s[i])
        if(string.charAt(i)=="a"||string.charAt(i)=="e"||string.chartAt(i)=="i"||
        string.chatAt(i)=="o"||string.charAt(i)=="u");
        vowelCount+=1;
    }
    return vowelCount;
}
console.log(countVowels("anuradha"));
// // matching the vowels */
/* function countVowels(s){
    var m = s.match(/[aeiou]/gi);
    return m === null ?0 : m.length;
}
console.log(countVowels("anuradha is a cosmetologist and software engineer"));
console.log(countVowels("anurdha")); */

// // replace

/* const countVowel= (s)=>s.replace(/[^aeiou]/ig,"").length;
console.log(countVowels("anuradha is a cosmetologist and software engineer"));
console.log(countVowels("anuu"));
 */


