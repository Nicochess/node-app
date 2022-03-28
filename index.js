// __dirname -> gives the directory name of the file (full path)
// __filename -> gives the full file name

const fs = require('fs');
const path = require('path');

// Create a folder

fs.mkdir(path.join(__dirname, 'Testing'), {}, err => {
    if(err) throw err;
    console.log("Folder created...")
})