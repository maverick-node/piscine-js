function repeat(s ,num) {
let res = ""; 
 for (let i = 0 ; i < num;i++) {
    res+= s;
 }
 return res
}


console.log(repeat('a',3));
