function login() {
    var User, Password

    User = document.getElementById('user').value;
    Password = document.getElementById('password').value;

    if(User == 'alexjf1575' && Password == '1575'){
        window.location = "index.html";
    }
    else{
        alert("Datos Incorrectos")
    }
}
