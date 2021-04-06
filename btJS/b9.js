var str = 'nha mot chuoi va tim iiiiiiiiiiiitu dai nhat trong chuoi'

var temp=  str.split(' ')[0];
str.split(' ').find((item)=>{
    if(temp.length < item.length)
    {
        temp = item;
    }
});

console.log(temp);