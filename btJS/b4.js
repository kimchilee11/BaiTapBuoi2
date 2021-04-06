var str = 'abc1234'

var array = str.split('')
var strAfterHandling = "";

str.split('').find((item)=>{
    strAfterHandling += String.fromCharCode(item.charCodeAt(0)+1);
})

console.log("Chuoi sau khi xu ly :");
console.log(strAfterHandling);