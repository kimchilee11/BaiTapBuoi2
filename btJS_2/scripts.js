function validateForm() {
    let x = document.forms["login_form"]["first_name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if ( document.forms["login_form"]["myfile"].value == "") {
        alert("File must be filled out");
    }
    if ( document.forms["login_form"]["dropdown"].value == "") {
        alert("Categry must be filled out");
    }
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};