// Code starts here



function getData() {
    console.log(firstName);
}
/*document.getElementById("submit").addEventListener("click", function getData() {
    console.log(firstName);
});*/

let btn = document.getElementById('submit');


btn.addEventListener('click', function () {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("passwordConfirm").value;
    var zip = document.getElementById("zipCode").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var hobbies = document.getElementById("hobbies").value;

    //See the values in the console
    console.log("Your first name is " + firstName);
    console.log("Your password is " + password);

    //check for gmail
    let check = email.includes("@gmail.com");
    console.log(check);
    if (email.includes("@gmail.com")) {
        //Nothing yet
    } else {
        email.replace("")
    }

    //check to see whether or not passwords match
    if (password === passwordConfirm) {
        console.log("Your passwords match")
    } else {
        console.log("Your passwords do not match")
    }

    //password checks for uppercase letters and numbers
    if (password.search(/[a-z]/) < 0) {
        alert("Your password requires a lower case character.")
    } else if (password.search(/[A-Z]/) < 0 && (password.search(/[0-9]/) < 0)) {
        alert("Your password requires an upper case character and a number.")
    } else if (password.search(/[A-Z]/) < 0) {
        alert("Your password requires an upper case character.")
    } else if (password.search(/[0-9]/) < 0) {
        alert("Your password needs a number")
    } else {
        console.log("You did it! Your password isn't assinine!")
    }


    //Check if password and passwordConfirm match
    // function validatePassword() {
    //     if (password.value != passwordConfirm.value) {
    //         passwordConfirm.setCustomValidity("Passwords Don't Match");
    //     } else {
    //         passwordConfirm.setCustomValidity('');
    //     }
    // }
    // password.onchange = validatePassword;
    // passwordConfirm.onkeyup = validatePassword;


})