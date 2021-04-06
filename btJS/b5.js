var str = "cccABCccc"

if(str.length >=3 && str.length%2==1 )
{
    var chuoi =str.slice(parseInt(str.length/2)-1, parseInt(str.length/2)+2);
}
else 
{
    console.log("Nhap lai chuoi");
}

console.log("Chuoi moi la :" + chuoi);