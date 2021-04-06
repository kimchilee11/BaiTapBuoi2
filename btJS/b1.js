var  d = new Date();
var m = d.getMonth()+1;

var time =d.getHours()+':'+ d.getMinutes()+ ':' +d.getSeconds()+'\t'+ d.getDate()+ "/"+ m +'/'+ d.getFullYear() ;
console.log(time);