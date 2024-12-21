// function split(data, sp){

//     let res = []
//     let rr = ""

//     for (let i = 0; i < data.length; i++){
//         if (data[i] == sp[0]){
//             if (data.slice(i, i+sp.length) == sp){
//                 res.push(rr)
//                 rr = ""
//                 i += sp.length
//             }
//         }
//         if (rr !== sp){
//             rr += data[i]
//         }else{
            
//         }
//     }
//     if (rr !== "undefined"){
//         res.push(rr)
        
//     }

//     return res
// }

function join(data,sep){
let res = ""




for (let i =0 ; i<= data.length-1;i++){
    if (i === data.length-1){
        res += data[i]
    }else {
        res += data[i]+sep
    }
}
return res
}



function split(data,sep){


   


    let res = ""
let rr = []
if (sep === ''){
    for (let i =0 ; i<= data.length-1;i++){
        rr.push(data[i])
}
return rr
}
if (data.length ===0){
    rr.push('')
    return rr
}



    for (let i=0; i < data.length;i++){
    if (data[i] == sep[0]){
        if (data.slice(i, i+sep.length) == sep){
            console.log(1)

            rr.push(res)
            res= ""
                i+= sep.length
                if (data.slice(i, i+sep.length) == sep){
                i--
                continue
                }

            
        
        }
    }
        res += data[i]
        if (typeof(data[i])=== "undefined") { 
            rr.push("")
            res=""
        }
        console.log(res)
    }
    if (res.length!==0) {
        rr.push(res)
    }
    
    return rr
}

console.log(split('', 'Riad'));
