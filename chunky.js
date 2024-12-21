function chunk(data, num){
let res = []
let tt = []
for (let i= 0; i< num;i++) {
    res.push(data[i])
}
for (let i= num ;i< data.length;i++) {
    tt.push(data[i])
}


return [res,tt]

}

