function login(params) {
    var user, password

    user = document.getElementById('user').value;
    password = document.getElementById('password').value;

    if(user == 'alexjf1575' && password == '1575'){
        alert("Inicio de Sesión exitoso")
    }
    else{
        alert("Datos Incorrectos")
    }
}