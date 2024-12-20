function indexOf(data, val, optional){
    if (Boolean(optional) === false) {
        for (let i = 0; i<data.length;i++) {
            if (val === data[i]) {
                return i
    
            }
        }
}
if (Boolean(optional) === true) {
    for (let i = optional; i<data.length;i++) {
        if (val === data[i]) {
         return i
         
        }
     
     }
}

return -1
}


function lastIndexOf(data, val, optional){
    if (Boolean(optional) === false) {
    for (let i = data.length; i>0;i--) {
        if (val === data[i]) {
         return i
         
        }
     }
     
}


if (Boolean(optional) === true) {
    for (let i = optional; i>=0; i--) {
        if (val === data[i]) {
         return i
         
        }
     }
     
}
return -1
}

function includes(data, val){
    for (let i = 0; i<data.length;i++) {
        if (val === data[i]) {
            return true
        }
}
return false
}

