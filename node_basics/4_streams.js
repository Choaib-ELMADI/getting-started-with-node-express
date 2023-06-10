//! Streams & Buffers
// Streams start using data, before it has finished loading
const fs = require('fs');

const readStream  = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write('\n____New Chunk Of Data____\n');
//     writeStream.write(chunk);
// });

//! Piping
readStream.pipe(writeStream);