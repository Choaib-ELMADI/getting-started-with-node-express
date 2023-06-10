const fs = require('fs');

fs.readFile('./folder/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

fs.writeFile('./folder/blog1.txt', 'Hello, Choaib', () => {
    console.log('File was written');
});

if (fs.existsSync('./folder/deleteme.txt')) {
    fs.unlink('./folder/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
} else {
    fs.writeFile('./folder/deleteme.txt', '', () => {
        console.log('File created');
    })
}

fs.mkdir('./folder/assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Folder created');
});

if (!fs.existsSync('./folder/assets')) {
    fs.mkdir('./folder/assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created');
    });
} else {
    fs.rmdir('./folder/assets', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Folder deleted');
}