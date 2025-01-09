import fs from 'fs';
let dir = process.argv[2]
fs.readdir(dir, (err, files) => {
    console.log(files.length);
  });
  