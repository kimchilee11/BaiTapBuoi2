var str = '123111109990990000000000999'

function isNumber(str){
    var result = str.match(/[^0-9]/g);
    if(result) return null;
    var temp ;
    var x=0;
    str.split('').forEach((items)=>{
        var count=0;
        str.split('').forEach((item)=>{
            if(items === item) count++;
            if(x < count) {
                x=count;
                temp = item;    
            }
        })
    })
    console.log("So xuat hien nhieu nhat la : "+ temp);
}

isNumber(str)