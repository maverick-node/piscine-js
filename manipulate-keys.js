function filterKeys(obj, func) {
    let r = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func(key)) {
            r[key] = val
        }
    }
    return r
}

function mapKeys(obj, func) {
    let r = {}
    for (let [key, val] of Object.entries(obj)) {
        let i = func(key)
        r[i] = val
    } 
    return r
}

function reduceKeys(obj, func, acc) {
    let index = 0
    let r = 0
    if (acc !== undefined) {
        index = 0
    } else {
        index = 1
    }

    let keys = Object.keys(obj)

    if (acc !== undefined) {
        r = acc
    } else {
        r = keys[0]
    }

    for (let i = index; i< keys.length;i++){
        r = func(r,keys[i])
    }
return r
}



