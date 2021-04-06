var time = new Date();

var day = time.getDate();
var month = time.getMonth()+1;
var year = time.getFullYear();

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);