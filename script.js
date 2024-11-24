
let login_Emailid = document.getElementById("emailid")
let login_btn = document.getElementById("login-btn")

let signup_Emailid = document.getElementById("signup-emailid")
let signup_btn = document.getElementById("signup-btn")

login_btn.addEventListener("click", ()=>{validateEmail(login_Emailid)})
signup_btn.addEventListener("click", ()=>{validateEmail(signup_Emailid)})

function validateEmail(emailid){
    if (emailid.value.includes("@") && emailid.value.includes("gmail") && emailid.value.includes(".com")) {
        alert("Submitted, please check your email")
    } 
    else {
        alert("Please provide a valid email")

    }
}