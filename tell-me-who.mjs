import fs from 'fs';
let dir = process.argv[2]
let re
let res

fs.readdir(dir, (err, files) => {
    res = files.map(file => {
        let modifiedFile = file.replace(".json", "").split("_");
        let t = modifiedFile[0];
        let l = modifiedFile[1];
        return [l, t]
    });
res.sort((lastA, lastB)=> {
    return lastA[0].localeCompare(lastB[0])
})
for (let i = 0; i < res.length; i++) {
        re = (i+1) + ". " + res[i].join(' ')
        console.log(re);
}



});

