import fs from 'fs';
import path from 'path';

let ress = []
let dir = process.argv[2]
let fil = fs.readdirSync(dir)


fil.forEach((file) => {
    let filePath = path.join(dir, file)
        let data = fs.readFileSync(filePath, 'utf-8');
        let obj = JSON.parse(data);
        if (obj.answer === "yes") {
            ress.push(file);
        }
});
ress = ress.map(file => {
    let modifiedFile = file.replace(".json", "").split("_")
    let t = modifiedFile[0]
    let l = modifiedFile[1]
    return [l, t];
});

ress.sort((lastA, lastB) => {
    return lastA[0].localeCompare(lastB[0])
});

let output = ""
for (let i = 0; i < ress.length; i++) {
    let re = (i + 1) + ". " + ress[i].join(' ')
    if (i < ress.length - 1) {
        output += re + '\n'
    } else {
        output += re
    }
}
fs.writeFileSync('vip.txt', output, 'utf-8')