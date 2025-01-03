function pick(obj, arr) {
    let sp = {}
    if (!Array.isArray(arr)) {
        arr = arr.split(" ")
    }

    for (let [key, val] of Object.entries(obj)) {
        for (let i = 0; i < arr.length; i++) {
            if (key == arr[i]) {
                sp[key] = val
            }
        }
    }
    return sp
}
function omit(obj, arr) {
  let sp = {...obj}

    if (!Array.isArray(arr)) {
        arr = arr.split(" ")
    }
    for (let [key, val] of Object.entries(sp)) {
        for (let i = 0; i < arr.length; i++) {
            if (key == (arr[i])) {
                delete sp[key]
            }
        }
    }
    return sp
}


// let tt = ['grinders', 'saws']

// let user = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }
// console.log(omit(user, tt));
