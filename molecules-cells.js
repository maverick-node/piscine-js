function RNA(data){
let res =""

for (let i = 0; i< data.length ;i++){
    if (data[i]== 'G'){
    
        res+= 'C'
    }
    if (data[i]== 'C'){
    
        res+= 'G'
    }
    if (data[i]== 'T'){
  
        res+= 'A'
    }
    if (data[i]== 'A'){
       
        res+= 'U'
    }
}
return res
}
function DNA(data){
    let res =""
    
    for (let i = 0; i< data.length ;i++){
        if (data[i]== 'C'){
        
            res+= 'G'
        }
        if (data[i]== 'G'){
        
            res+= 'C'
        }
        if (data[i]== 'A'){
      
            res+= 'T'
        }
        if (data[i]== 'U'){
           
            res+= 'A'
        }
    }
    return res
    }
    
console.log(RNA("CGAU"));
