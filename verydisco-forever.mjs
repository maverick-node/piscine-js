import { writeFile } from 'node:fs/promises';
let arg = process.argv[2]
let r 
let sp = arg.split(" ")
for (let i =0 ;i <sp.length;i++){
    r = sp[i].slice(sp[i].length-Math.floor(sp[i].length/2))
    let z = sp[i].slice(0,sp[i].length-Math.floor(sp[i].length/2))
let res = r+z

sp[i]=res

}


let res = sp.join(" ");

writeFile("verydisco-forever.txt", res)