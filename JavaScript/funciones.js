






function validarFormulario1() {
    let nombre = document.getElementById("nombre").value; //Crea variables y les agrega lo que se escribe en los id nombre, email, mensaje, alerta
    let email = document.getElementById("email").value;  //document es para manipular archivos html, getElementById para capturar los valores de los id del archivo html
    let mensaje = document.getElementById("mensaje").value; 
    let alerta = document.getElementById("alerta"); 

    // Validación 1: Si alguno de las 3 variables vienen vacías, se arroja alerta
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") { //trim quita los espacios ingresados por accidente
        alerta.className = "alert alert-danger"; //Se activa el popup puesto en fcontacto. Como es de bootstrap, este popup ya viene en rojo.
        alerta.innerHTML = "❌ Debes completar todos los campos.";
        // Ocultar el aviso automáticamente después de 3 segundos:
        setTimeout(() => {
            alerta.classList.add("d-none");
        }, 3000);
        return false; //Si hay retorno false, el formulario no envía los datos (tmb sirve para no refrescar la pag y que se alcance a ver el popup)
    }

    // Pero si las 3 variables si vienen llenas, se arroja popup verde
    alerta.className = "alert alert-success"; //Se activa el popup puesto en fcontacto. Como es de bootstrap, este popup ya viene en verde.
    alerta.innerHTML = "✅ Formulario enviado con éxito.";

    // Ocultar el aviso automáticamente después de 3 segundos
    setTimeout(() => {
        alerta.classList.add("d-none");
    }, 3000);

    return false; //Ya que no hay envío real por ahora, se retorna false para que se pueda visualizar el popup verde
    //Ya que si se pone return true el formulario si se envia, y la página instantaneamente se recarga, por lo que no se alcanzan a ver los popup


}
