const fs = require('fs');

const readingStream = fs.createReadStream('./folder/blog1.txt', { encoding: 'utf8' });
const writingStream = fs.createWriteStream('./folder/blog2.txt');

readingStream.on('data', (chunk) => {
    console.log('\n----- NEW CHUNK -----\n');
    console.log(chunk);
    
    writingStream.write('\n----- NEW CHUNK -----\n');
    writingStream.write(chunk);
});

readingStream.pipe(writingStream);