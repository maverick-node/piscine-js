function mult2(a) {
    let v = 0
    return function (b) {
        v = a * b
        return v
    }
    
}

function add3(a) {
    let v = 0
    return function (b) {
        return function (c) {
            v = a + b + c
            return v
        }
        
    }
}

function sub4(a) {
    let v = 0
    return function (b) {
        return function (c) {
            return function (m) {
                v = a - b - c-m
                return v
            }
            
        }
    }
}