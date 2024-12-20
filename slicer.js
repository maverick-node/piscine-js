function slice(word,start,end){
    let res=""
    let ress=[]



    
    if (start<0){
        start = word.length+start
    }
    if (Array.isArray(word)=== true) {
        if (Boolean(end) === false) {

            for (let i= start ; i<word.length;i++){
                ress.push(word[i])
              
         }
         return ress
        }
        if (Boolean(end) === true && end >0) {

            for (let i= start ; i<end;i++){
                ress.push(word[i])
              
         }
         return ress
        }
        if (Boolean(end) === true && end < 0) {
            end = word.length+end
            for (let i= start ; i<end;i++){
                ress.push(word[i])
              
         }
         return ress
        }
       
    }
    if (typeof(word)=== "string") {
        if (end && end < 0) {
            end = word.length+end
            for (let i = start ; i<end;i++){
                res+= word[i]
            
         }
           return res
        }
        if (end && end > 0) {
            
            for (let i = start ; i< end;i++){
                res+= word[i]
            
         }

        }
       
        
        if (Boolean(end)=== false) {
            for (let i = start ; i<word.length;i++){
                res+= word[i]
            
         }

        }
         return res
        }
}



console.log(slice([1, 2, 3, 4, 5, 6], 0,-2));


