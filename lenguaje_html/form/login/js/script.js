function validarusuario(event){
    //Evita que el formulario se envie
    event.preventDefault();

    //obtener los valores de usuario y contraseña
    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
    
    //validar usuario
    if(usuario === "rherediar" && contrasenia === "rafael"){
        alert('inicio de sesión exitoso');
        window.location.href= 'home.html';
        }
        else
            {
            alert('usuario o contraseña incorrectos');
            }
}