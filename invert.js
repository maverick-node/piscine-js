function invert(object){
    let res = {}
    for (let [key,val] of Object.entries(object)){
        res[val]=key
    }
    return res
}


