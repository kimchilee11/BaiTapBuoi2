var i =0;
var data = (localStorage.getItem('data'));
var array =[];
// console.log(data[2]);
// if(data!=null)
//  {
//     console.log(data);
//     for(let j=0 ; j < data.length ; j++) {
//         let r1 = document.createElement("tr");

//         let c1 = document.createElement("td");
//         c1.innerHTML = j;
//         let c2 = document.createElement("td");
//         c2.innerHTML = data[j].itemName;
        
//         let res = data[j].image;
//         var image = new Image();
//         image.src = res;
//         let c4 = document.createElement("img");
//         c4.width = "10";
//         c4.src = res;
    
//         r1.appendChild(c1);
//         r1.appendChild(c2);
//         r1.appendChild(image);
    
//         let body = document.getElementById("tbody");
//         body.appendChild(r1);
//     }
//     i= data.length
//     array  = data;
// }
// array = data
document.querySelector("#myfile").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem('file' ,reader.result);
        document.getElementById('loadImage').src = reader.result;
    });

    reader.readAsDataURL(this.files[0]);
});

//Signature
document.getElementById("inputForm").addEventListener("submit", (event) => {
    event.preventDefault();
        if(validateForm()) {
        let value = {
            itemName : document.getElementById('itemName').value,
            category : document.getElementById('category').value,
            image : localStorage.getItem('file'),
        }
        console.log(array);
        array.push(value);
        console.log(array);
        document.forms[0].reset();
        localStorage.setItem('data', JSON.stringify(array));
        showItem();
        document.getElementById("nameWarning").innerText="";
        document.getElementById("cateWarning").innerText="";
        document.getElementById("imgWarning").innerText="";
        document.getElementById("loadImage").src="";
    }
});
var m=0;
function removeItem(x) {
    x=x+2-m;
    let  l = document.getElementById('table').rows.length;
    console.log(x,l);
    for(let j=2; j<= l ; j++) {
        if(j==(x)) {
            document.getElementById('table').deleteRow(x);
        }
    }
    m++;
}

function Save(x)
{
    let name = document.getElementById(`itemName${x}`);
    let value = document.getElementById(`itemNameNew${x}`).value;
    name.innerHTML=value;

    let cate = document.getElementById(`category${x}`);
    let value2 = document.getElementById(`categoryNew${x}`).value;
    cate.innerHTML=value2;
    
    let btnC = document.getElementById(`btnD${x}`);
    btnC.innerHTML= `<td id="btnD${x}"><button onclick="removeItem(${x})">Delete</button></td>`;

    let btnS = document.getElementById(`btnE${x}`);
    btnS.innerHTML= `<td id="btnE${x}"><button onclick="editItem(${x})">Edit</button></td>`;
}

function Cancel(x) {
    let name = document.getElementById(`itemName${x}`);
    let value = document.getElementById(`itemName${x}`).value;
    name.innerHTML=value;

    let cate = document.getElementById(`category${x}`);
    let value2 = document.getElementById(`category${x}`).value;
    cate.innerHTML=value2;
    
    let btnC = document.getElementById(`btnD${x}`);
    btnC.innerHTML= `<td id="btnD${x}"><button onclick="removeItem(${x})">Delete</button></td>`;

    let btnS = document.getElementById(`btnE${x}`);
    btnS.innerHTML= `<td id="btnE${x}"><button onclick="editItem(${x})">Edit</button></td>`;
}

function editItem(x) {
    let j =x+2;

    let name=document.getElementById(`itemName${x}`);
    name.innerHTML=`<input type='text' id="itemNameNew${x}" value="">`;
    let itemNameEdit = name.innerHTML;
    table.rows[j].cells[1].innerHTML = itemNameEdit;

    let category=document.getElementById(`category${x}`);
    category.innerHTML=`<select class="custom-select mr-sm-2" id="categoryNew${x}">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>`;
    let itemCateEdit = category.innerHTML;
    table.rows[j].cells[2].innerHTML = itemCateEdit;

    let btnC = document.getElementById(`btnD${x}`);
    btnC.innerHTML= `<td ><button onclick="Cancel(${x})">Cancel</button></td>`;
    let btnCEdit = btnC.innerHTML;
    table.rows[j].cells[4].innerHTML = btnCEdit;

    let btnS = document.getElementById(`btnE${x}`);
    btnS.innerHTML= `<td id="btnSave${x}"><button onclick="Save(${x})">Save</button></td>`;
    let btnSEdit = btnS.innerHTML;
    table.rows[j].cells[5].innerHTML = btnSEdit;
}

var tbody = document.querySelector("tbody");
function showItem () {
    tbody.innerHTML += 
    `
        <tr>
            <td id="id${i}">${i}</td>
            <td id="itemName${i}">${array[i].itemName}</td>
            <td id="category${i}">${array[i].category}</td>
            <td>
                <img src="${array[i].image}" style="width:100px">
            </td>
            <td id="btnD${i}"><button onclick="removeItem(${i})">Delete</button></td>
            <td id="btnE${i}"><button onclick="editItem(${i})">Edit</button></td>
        </tr>`
    i++;
}

function validateForm() {
    document.getElementById("nameWarning").innerHTML="";
    document.getElementById("imgWarning").innerHTML="";
    document.getElementById("cateWarning").innerHTML="";
    let bien =true;
    let x = document.forms["inputForm"]["itemName"].value;
    if(!( x[0] < '0' || x[0] > '9') ) {
        document.getElementById("nameWarning").innerHTML="Khong the bat dau bang so";
        bien= false;
    }
    if(x.length>10){
        document.getElementById("nameWarning").innerHTML="Length must be less than 10";
        bien= false;
    }
    if (x.toString().trim() == "") {
        document.getElementById("nameWarning").innerHTML=("Name must be filled out");
        bien= false;
    }
    if ( document.forms["inputForm"]["myfile"].value == "") {
        document.getElementById("imgWarning").innerHTML=("File must be filled out");
        bien= false;
    }
    if ( document.forms["inputForm"]["category"].value == "Choose...") {
        document.getElementById("cateWarning").innerHTML=("Category must be choosen");
        bien= false;
    }
    if(bien == false) return false;
    return true;
}
