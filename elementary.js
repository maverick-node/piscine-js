function multiply(a, b) {
let res = 0;
if (b<0) {
    b =-b
    for (let i =0; i < b; i++ ) {
        res+= a
        
    }
    res = -res
    return res
}
    if (a >= 0|| b >= 0){
     for (let i =0; i < b; i++ ) {
         res+= a
        }
    return res
    }
}

function divide(a,b) {
    let res = 0;
    if (a >=0 && b >= 0) {
        while (a >=b){
            a = a-b
            res++
       }
       return res
    }
    if (a <0 && b < 0) {
        a = -a
        b = -b
         while (a >=b){
             a = a-b
             res++
              }
              
              return res
     }
    if (a <0 || b < 0) {
        if (a<0 ) {
            a = -a
        }
        if (b<0 ) {
            b = -b
        }
        while (a >=b){
            a = a-b
            res++
             }
             res = -res
             return res
    }
}


function modulo(a,b){
    if (a >=0 && b >= 0) {
         while (a >=b){
             a = a-b
        }
        return a
     }
    
    if (a <0 && b < 0) {
        a = -a
        b = -b
         while (a >=b){
             a = a-b
        }
        return -a
     }
    if (b <0) {
       
        if (b<0 ) {
            b = -b
        }
        while (a >=b){
            a = a-b
             
             }
             
             return a
    }
    if (a <0) {
       
        if (a<0 ) {
            a = -a
        }
        while (a >=b){
            a = a-b
             
             }
             
             return -a
    }
    
}



