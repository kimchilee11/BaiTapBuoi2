function b1(){
    var  d = new Date();
    var m = d.getMonth()+1;
    
    var time =d.getHours()+':'+ d.getMinutes()+ ':' +d.getSeconds()+'\t'+ d.getDate()+ "/"+ m +'/'+ d.getFullYear() ;
    alert(time);
}

function b2() {
    var time = new Date();

    var day = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();

    var time = (`${day}-${month}-${year}\n`) ;
    time += (`${day}/${month}/${year}\n`);

    time += (`${month}-${day}-${year}\n`);
    time += (`${month}/${day}/${year}\n`);
    alert(time);
}

function b3(){
    var str = document.getElementById("input3").value;
    var num = parseInt(str);
    var state = false;

    function isNumber(str){
        var result = str.match(/[^0-9]/g);
        if(result) return alert("Day khong phai la 1 chuoi so !!!!!!");
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
        if(state) alert("Day la 1 chuoi tang");
        else alert("Day khong phai la 1 chuoi tang");
    }

    isNumber(str);
}

function b4(){
    var str = document.getElementById("input4").value;

    var strAfterHandling = "Chuoi sau khi xu ly :";
    str.split('').find((item)=>{
        strAfterHandling += String.fromCharCode(item.charCodeAt(0)+1);
    })

    alert(strAfterHandling);
}

function b5(){
    var str = document.getElementById("input5").value;

    if(str.length >=3 && str.length%2==1 )
    {
        var chuoi =str.slice(parseInt(str.length/2)-1, parseInt(str.length/2)+2);
    }
    else 
    {
        alert("Nhap lai chuoi");
    }

    alert("Chuoi moi la : '" + chuoi +"'");
}

function b6(){
    var str = document.getElementById("input6").value;

    function isNumber(str){
        var result = str.match(/[^0-9]/g);
        if(result) return alert("Day khong phai la 1 chuoi so !!!")
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
        alert("So xuat hien nhieu nhat la : "+ temp);
    }

    isNumber(str)
}

function b7(){
    var str = document.getElementById("input7").value;
    var searchItem = 'java';

    var indexOfFirst= str.indexOf(searchItem);

    if(indexOfFirst ==-1) alert("Cannot searching item in string!!!");
    else alert(`The index of the first "${searchItem}" from the beginning is ${indexOfFirst}`);
}

function b9(){
    var str = document.getElementById("input9").value;

    var temp=  str.split(' ')[0];
    str.split(' ').find((item)=>{
        if(temp.length < item.length)
        {
            temp = item;
        }
    });

    alert(temp);
}

function b10(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let temp =0;
    var chuoi = `Cac so nguyen to trong khoang ${num1} den ${num2} la: `

    for(let i=num1+1 ; i < num2; i++)
    {
        for(let j=2; j< i; j++){
            if(i%j ==0) temp++;
        }

        if(temp == 0){
            chuoi += i +'  ';
        }
        temp =0;
    }
    alert(chuoi);

}

function b8(){
    var month = parseInt(document.getElementById("input8").value);
    switch(month) {
        case 1: 
            alert("January");
            break;
        case 2: 
            alert("February");
            break;    
        case 3: 
            alert("March");
            break;    
        case 4: 
            alert("April");
            break;    
        case 5: 
            alert("May");
            break;    
        case 6: 
            alert("June");
            break;    
        case 7: 
            alert("July");
            break;    
        case 8: 
            alert("August");
            break;    
        case 9: 
            alert("September");
            break;    
        case 10:
            alert("October");
            break;        
        case 11:
            alert("November");
            break;        
        case 12:
            alert("December");
            break;      
        default: 
            alert("Unvailable !!!!!")
    }
}