setTimeout(() => {
    console.log("Good bye.");
    clearInterval(hello);
}, 5000);

const hello = setInterval(() => {
    console.log("Hello,");
}, 1000);

console.log(__dirname);
console.log(__filename);