var vowels = /[aeiou]/gi

function vowelDots(data){
    let res = ""
for (let i=0; i< data.length; i++){
    if (data[i].match(vowels)){
        res+= data[i]+ "."
    }else{
        res+= data[i]
    } 
}
return res
}

console.log(vowelDots("aes"));
