function sign(data){ 
        if (data > 0){
    return 1
        }else if (data< 0) {
    return -1
        }else if (data == 0){
            return 0
        }
        
}
function sameSign(data, data2){
 
if (sign(data)===sign(data2)){
return true
} else {
    return false
}
}

console.log(sameSign(231,0))