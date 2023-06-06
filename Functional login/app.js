function Goo() {
    let email = document.querySelector(".email")
    let eMail= email.value
    let password = document.querySelector(".password")
    let passWord = password.value.length
    email.value=""
    password.value=""
    if(eMail.includes("@gmail.com") && passWord>=8){
        alert("Qeydiyyatdan Keçdiniz:))")
    }else{
        alert("E-mail və ya Şifrəniz səhvdir:((")
    }  
}
