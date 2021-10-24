let fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    email = document.getElementById("email"),
    password1 = document.getElementById("password1"),
    password2 = document.getElementById("password2"),
    submit = document.getElementById("submit");

fname.addEventListener("keypress",checkName);
lname.addEventListener("keypress",checkName);
email.addEventListener("keypress",checkEmail)
password1.addEventListener("keypress",checkPassword);
password2.addEventListener("keypress",checkPassword);
submit.addEventListener("click",prevent);
submit.addEventListener("click",send);
submit.addEventListener("click",send1);

function prevent(event) {
    event.preventDefault();
}

function checkName(event){
    let x = event.charCode;
    if(x != 0){
        if(x < 97 || x > 122){
            if (x < 65 || x > 90){
            event.preventDefault();
            alert("Please use only latin letters");
            }
        }
    }
}

function checkEmail(event){
    let x = event.charCode;
    if(x != 0){
        if(x < 97 || x > 122){
            if(x < 46 || x > 57) {
                if (x != 64) {
                    event.preventDefault();
                    alert("Please use only latin letters and numbers");
                }
            }
        }
    }
}

function checkPassword(event){
    let x = event.charCode;
    if(x != 0){
        if(x < 97 || x > 122){
            if (x < 65 || x > 90){
                if (x < 46 || x > 57){
                    event.preventDefault();
                    alert("Please use only latin letters and numbers");
                }
            }
        }
    }
}

function send(event){
    let firstname = fname.value, lastname = lname.value, email1 = email.value, passWord1 = password1.value,passWord2 = password2.value;

    if (firstname === ""){
        event.preventDefault();
        alert("Please fill in the field First Name");
    }else if(firstname.length < 2 || firstname.length > 10){
        event.preventDefault();
        alert("Your Name have between 2 and 10 letters");
    }else if (lastname === "") {
        event.preventDefault();
        alert("Please fill in the field Last Name");
    }else if(lastname.length < 2 || lastname.length > 10){
        event.preventDefault();
        alert("Your Last Name have between 2 and 10 letters");
    }else if (email1 === ""){
        event.preventDefault();
        alert("Please fill in the field Email");
    }else if(email1.indexOf("@mail.ru") == -1 && email1.indexOf("@gmail.com") == -1){
        event.preventDefault();
        alert("Your email address must end with '@mail.ru' or '@gmail.com'");
    }else if (passWord1 === ""){
        event.preventDefault();
        alert("Please fill in the field Password");
    }else if(passWord1.length < 6 || passWord1.length > 20){
        event.preventDefault();
        alert("Your Password have between 6 and 20 symbols");
    }else if(passWord1 != passWord2){
        event.preventDefault();
        alert("Passwords must match");
    }else{
        alert("You have successfully registered" + "\n" + "Please click on 'Send' again to go to Next page");


        localStorage.setItem("firstName",firstname);
        localStorage.setItem("lastName",lastname);
        localStorage.setItem("Email",email1);
        localStorage.setItem("password1",passWord1);
    }
}
function send1(){
    window.open("logIn.html","_self");
}




