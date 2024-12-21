function reverse(data) {
    let res = ""
    let ress =  [];
    if (Array.isArray(data)) {
        for (let i = data.length-1; i >=0;i--){
            ress.push(data[i])
        }
        return ress

    } 
    for (let i = data.length-1; i >=0;i--){
        res+= data[i]
    }
   return res
}


