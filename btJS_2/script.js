var i =0;
var data = (localStorage.getItem('data'));
var array =[];
// if(data)
 {
    console.log(data);
    for(let j=0 ; j < data.length ; j++) {
        let r1 = document.createElement("tr");

        let c1 = document.createElement("td");
        c1.innerHTML = j;
        let c2 = document.createElement("td");
        c2.innerHTML = data[j].itemName;
        
        let res = data[j].image;
        var image = new Image();
        image.src = res;
        let c4 = document.createElement("img");
        c4.width = "10";
        c4.src = res;
    
        r1.appendChild(c1);
        r1.appendChild(c2);
        r1.appendChild(image);
    
        let body = document.getElementById("tbody");
        body.appendChild(r1);
    }
    i= data.length
    array  = data;
}
// array = data
console.log(data);
document.querySelector("#myfile").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem('file' ,reader.result);
        console.log("aloalo");
    });

    reader.readAsDataURL(this.files[0]);
});

//Signature
document.getElementById("inputForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let value = {
        itemName : document.getElementById('itemName').value,
        image : localStorage.getItem('file'),
    }
    console.log(array);
    array.push(value);
    console.log(array);
    document.forms[0].reset();
    localStorage.setItem('data', JSON.stringify(array));
    show();
})
function show () {
    let r1 = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.innerHTML = i;
    let c2 = document.createElement("td");
    c2.innerHTML = array[i].itemName;
    
    let res = array[i].image;
    var image = new Image();
    image.src = res;
    let c4 = document.createElement("img");
    c4.width = "10";
    c4.src = res;

    r1.appendChild(c1);
    r1.appendChild(c2);
    r1.appendChild(image);

    let body = document.getElementById("tbody");
    body.appendChild(r1);
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
        alert("Name must be filled out");
        return false;
    }
    if ( document.forms["inputForm"]["myfile"].value == "") {
        alert("File must be filled out");
        return false;
    }
    return true;
    // if ( document.forms["login_form"]["dropdown"].value == "") {
    //     alert("Categry must be filled out");
    // }
}
