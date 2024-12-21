function cutFirst(str){
    let res = "";
    for (let i = 2 ; i < str.length; i++){
        res+=str[i]
     }

return res
}

function cutLast(str) {
let res = "";
    for (let i = 0; i < str.length-2; i++) {
        res+=str[i]
    }
return res
}

function keepFirst(str) {
    let res = "";
    if (str.length > 2){

        for (let i = 0; i < 2;i++){
            res += str[i] 
            
        }
    }else {
        for (let i = 0; i < str.length;i++){
            res += str[i] 
            
        }
    }
    
    
    return res
}


function keepLast(data) {
    let res = ""

    if (data.length >2){
        for (let i = data.length-2 ;i < data.length;i++){
            res += data[i]
        }

    }else {
        for (let i = 0 ;i < data.length;i++){
            res += data[i]
        }
    }
    
    return res
}

function cutFirstLast(data){
    let res = "";
    for (let i = 2;i < data.length-2;i++ ){
        res+= data[i]
    }
   return res
}

function keepFirstLast(data) {
    let res = ""
    let ress = ""
    if (data.length<= 4){
        return data
    } 
    for (let i = 0; i < 2;i++){
        res += data[i] 
        
    }
    for (let i = data.length-2 ;i < data.length;i++){
        ress += data[i]
    }
   
return res +ress
}



console.log(cutFirst('abcdef'));
