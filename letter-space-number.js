function letterSpaceNumber(data){

let pp = data.match(/\w\s\d\b/g) 
return pp || []
}

console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."));
