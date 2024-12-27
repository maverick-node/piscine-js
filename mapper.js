function map(arr, func){
let r = []
    for (let i= 0; i< arr.length;i++){
        r.push(func(arr[i],i, arr))
}
return r
}
function flatMap(arr, func) {
  let tt = []
  for (let i = 0 ; i < arr.length;i++){
    if (Array.isArray(func(arr[i],i,arr))){
       tt=tt.concat(func(arr[i],i,arr))
    }else{
        tt.push(func(arr[i],i, arr))
    }
}
  return tt
}


