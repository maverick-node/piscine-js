
is.num = (data) => {
    if(typeof(data)=== "number"){
        return true
    }else {
        return false
    }
}

is.bool = (data) => {
    if (typeof(data)=== "boolean") {
        return true
    }else {
        return false
    }
}
is.str = (data) => {
    if (typeof(data) === "string") {
        return true
    }else {
        return false
    }
}
is.undef = (data) =>{
    if (typeof(data)=== "undefined") {
        return true
    }else {
        return false
    }
}

is.obj = (data) =>{
    if (typeof(data)=== "object" && (!Array.isArray(data))&& data !=null)  {
        return true
    }else {
        return false
    }
}
is.fun = (data) => {
    if (typeof(data)=== "function") {
        return true
    }else{
        return false
    }
}

is.arr = (data) => {
    if (Array.isArray(data)) {
        return true
    }else{
        return false
    }
}
is.nan = (data) => {
    if (Number.isNaN(data)) {
        return true
    }else{
        return false
    }
}

is.def = (data) => {
    if (typeof(data)!== "undefined") {
        return true
    }else{
        return false
    }
}

is.truthy = (data) => {
    if (Boolean(data)=== true){
        return true
    }else {
        return false
    }
}

is.falsy = (data) => {
    if (Boolean(data)=== false){
        return true
    }else {
        return false
    }
}



