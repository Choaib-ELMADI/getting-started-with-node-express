//! Core Modules : File System
const fs = require('fs');

//* Reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


//* Writing files
fs.writeFile('./docs/blog2.txt', 'Hello, World', () => {
    console.log('File was written');
});


//* Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder was added');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Folder was deleted');
}


//* Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File was deleted');
    })
} else {
    fs.writeFile('./docs/deleteme.txt', '', () => {
        console.log('File was added');
    })
}