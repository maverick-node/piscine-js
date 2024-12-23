function sameAmount(data, rgx1,rgx2){
    let res = false

let rr = new RegExp(rgx1,'\g')
let r2 = new RegExp(rgx2,'\g')

let match1=[...data.matchAll(rr)]
let match2=[...data.matchAll(r2)]
if (match1.length==match2.length){
res = true
}

return res 
}
