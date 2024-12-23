function get(src,path){

let result = src
const sp = path.split('.')
for (let i=0 ; i< sp.length;i++){
    if (typeof(result[sp[i]]) === "undefined" ){
     
        
        return undefined
    }
   
    result=result[sp[i]]
}
return result
}

