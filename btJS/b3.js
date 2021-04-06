console.log('Nhap 1 chuoi so : ');

var str = '012999';
var num = parseInt(str);
var state = false;

function isNumber(str){
    var result = str.match(/[^0-9]/g);
    if(result) return null;
    else 
    {
        var item = parseInt(str.split('')[0]);
        str.split('').forEach(element => {
            if(item <= element ) {
                item = element;
                state = true;
            }
            else return state = false;
        });
    } 
    if(state) console.log("Day la 1 chuoi tang");
    else console.log("Day khong phai la 1 chuoi tang");
}

isNumber(str);