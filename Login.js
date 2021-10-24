let submit = document.getElementById("submit0"),
    email = document.getElementById("email0"),
    password0 = document.getElementById("password0");

submit.addEventListener("click",send)

function send(){
    if(localStorage.getItem("Email") === email.value && localStorage.getItem("password1") === password0.value){
        alert(localStorage.getItem("firstName") + " " + localStorage.getItem("lastName") + " Congratulations because I have successfully completed my task and you have successfully logged into your account.")
    }
    if(localStorage.getItem("Email") !== email.value){
        alert("Try again")
    }else if(localStorage.getItem("password1") !== password0.value){
        alert("Try again")
    }
}