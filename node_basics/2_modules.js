//! Modules & Require

//* When we require another file, Node looks for that file and runs it

// const family = require('./test');
// const { people, ages } = require('./test');
// console.log(people, ages);

//! Core Modules : Operating System
const os = require('os');
console.log(os.platform(), os.homedir());