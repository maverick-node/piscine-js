function round(data){
    let x = data - trunc(data)
    if (x >= 0 && x >= 0.5) {
        return trunc(data)+1
    } else if (x < 0 && x <= -0.5) {
        return trunc(data) -1
    } else {
        return trunc(data)
    }
}

function floor(data) {
if (data >= 0) {
    return trunc(data)
}else {
    return trunc(data)-1
}

}

function ceil(data){
    if (data <= 0) {
        return trunc(data)
    }else {
        return trunc(data)+1
    }
}

function trunc(n) {
    let x=0
    let sign = 1
    let numss = 100000000;
if (n < 0) {
    n=-n
    sign = -1
} 
    for (let i= 0; n>=1; i++) {
        if (n >= numss) {
            x += numss
            n -= numss
        }else {
            numss /= 10
        } 
    }
    return x * sign
   
}







