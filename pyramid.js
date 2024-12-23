function pyramid(data,num){
    let res = ""
    for (let i=1 ; i <= num; i++){
        for (let k = i; k <num; k++) {
            for (let o = 1; o <= data.length; o++) {
                res += " "
            }
        }
        for (let k = 1; k <= i; k++) {
            res += data
        }
        for (let k = 1; k < i; k++) {
            res += data
        }
       
        if (i !== num){
            res+= "\n"
        }
    }
    return res
}

console.log(pyramid("*",5));
