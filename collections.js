function arrToSet(data) {
const pp = new Set(data);
return pp
}

function arrToStr(data) {
 return data.join("");
}

function setToArr(data){
const s = new Set(data);
return Array.from(s)
}

function setToStr(data) {
    const s = new Set(data);
return  Array.from(s).join('')
}
function strToArr(data){
    return Array.from(data)
}

function strToSet(data){
    return new Set(data)
}

function mapToObj(data){
    return Object.fromEntries(data);
}

function objToArr(data){
    return Object.values(data)
}
function objToMap(data){
    return new Map(Object.entries(data))
}
function arrToObj(data){
    return Object.assign({},data)
}

function strToObj(data){
    return Object.assign({},data)
}
function superTypeOf(data){
    if (data === null) return 'null';
    if (data instanceof Set) return "Set";
    if (data instanceof Map) return "Map";
    if (typeof(data) === "number") return "Number";
    if (typeof(data) === "string") return "String";
    if (typeof(data) === "undefined") return "undefined";
    if (typeof(data)=== "function") return 'Function';
    if (Array.isArray(data)) return 'Array';
    if (typeof(data)=== "object") return 'Object';
    if (isNaN(data)) return 'Number';
    // if (typeof(data)=== null) return 'null';
    

}















