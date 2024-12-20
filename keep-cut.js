function cutFirst(str){
    let res = [];
    for (i = 2 ; i < str.length; i++){
        res[i-2] =str[i]
     }
if (!Array.isArray(str)) {
   res=res.join('')
}
return res
}

function cutLast(str) {
let res = "";
    for (i = 0; i < str.length-2; i++) {
        res+=str[i]
    }
return res
}

function keepFirst(str) {
    let res = "";
    for (i = 0; i < 2;i++){
        res += str[i] 
        
    }
    if (Array.isArray(str)) {
        res=res.split('')
     }
    return res
}


