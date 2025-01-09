import { readFile } from 'fs/promises'; 
let r
let name = process.argv[2]
let read = await readFile(name,'utf8')

let sp = read.split(" ")

for (let i =0 ;i <sp.length;i++){
    r = sp[i].slice(sp[i].length-Math.ceil(sp[i].length/2))
    let z = sp[i].slice(0,sp[i].length-Math.ceil(sp[i].length/2))
let res = r+z

sp[i]=res

}
console.log(sp.join(" "));
