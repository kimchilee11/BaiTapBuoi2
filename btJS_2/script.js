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
    }
});

function removeItem(x) {
    x = x+2;
    let  l = document.getElementById('table').rows.length;
    for(let j=2; j< l ; j++) {
        if(j==(x)) {
            document.getElementById('table').deleteRow(j);
        }
    }
}

function Save(x)
{
    let j=x+2;
    let name = document.getElementById(`itemNameNew${x}`);
    let value = document.getElementById(`itemNameNew${x}`).value;
    name.innerHTML=`<td id="itemName${x}">${value}</td>`;
    let itemEdit = name.innerHTML;
    table.rows[j].cells[1].innerHTML = itemEdit;
}

function editItem(x) {
    let j =x+2;

    let name=document.getElementById(`itemName${x}`);
    name.innerHTML=`<input type='text' id="itemNameNew${x}" value="">`;
    let itemNameEdit = name.innerHTML;
    table.rows[j].cells[1].jinnerHTML = itemNameEdit;

    let btnC = document.getElementById(`btnD${x}`);
    btnC.innerHTML= `<td id="btnCancel${x}"><button onclick="Cancel(${x}, ${document})">Cancel</button></td>`;
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
        </tr>
    `
    i++;
}

function uploadImage () {
    let res = window.localStorage.getItem('myfile');
    var image = new Image();
    image.src = res;
    document.getElementById("loadImage").src = res;
    parentDiv.appendChild(image);
}

function validateForm() {
    let x = document.forms["inputForm"]["itemName"].value;
    if (x == "") {
        document.getElementById("nameWarning").innerHTML=("Name must be filled out");
        return false;
    }
    if(!(x.length == 0 && x.length > 10 && ( x >= '0' && x <= '9' ) )){

        document.getElementById("nameWarning").innerHTML=null;
    }
    if(x.length>10){
        document.getElementById("nameWarning").innerHTML="Length must be less than 10";
        return false;
    }
    if ( document.forms["inputForm"]["myfile"].value == "") {
        document.getElementById("nameWarning").innerHTML=("File must be filled out");
        return false;
    }
    if ( document.forms["inputForm"]["category"].value == "Choose...") {
        document.getElementById("nameWarning").innerHTML=("Category must be choosen");
        return false;
    }

    return true;
}
