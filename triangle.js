function triangle(data,num){
    let res = ""
    for (let i=1 ; i <=num; i++){
        for (let j =1 ;j <= i; j++){
            res += data 
        }
        if (i !== num){
            res+= "\n"
        }
    }
    return res
}