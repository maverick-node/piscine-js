function filter(arr, func) {
    let tt = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            tt.push(arr[i])
        }
    }
    return tt
}


function reject(arr, func) {

    let tt = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            tt.push(arr[i])
        }
    }
    return tt

}

function partition(arr,func){
 return [filter(arr, func), reject(arr, func)];
}