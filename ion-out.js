function ionOut(data){
    const reg =/(\w*)(t)(?=ion)/g
    let ss = data.match(reg) || []
    return ss
}


console.log(ionOut("attention, direction"));
