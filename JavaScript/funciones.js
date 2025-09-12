


//Para el formulario contacto
function validarFormulario1() {
    //let: declara variable     ////    document.getElementById("nombre").value: obtiene el valor ingresado en el campo
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validación básica
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {//trim() es para borrar espacios que el usuario pueda haber ingresado por error
        alert("No pueden haber campos vacios ❌");
        return false;  //si hay return false, el formulario NO se envía a la BD.
    }

    alert(" Formulario enviado correctamente ✅\n Se le enviará un correo para confirmar 😉");
    return true; //Si llega hasta aquí, return true hace que el formulario SÍ se envíe a la BD.
}




//Función para los botones "añadir carrito"
function anadirAlCarrito(nombre, precio) { 
    //localStorage: guarda info temporal en el navegador (para que sea persistente y no se borre al refrescar la pag o irse de la pag)
    //localStorage trabaja con Strings guardandolos o sacandolos de la memoria temporal del navegador, 
    //por tanto luego de que actúa, JS necesita JSON.parse o JSON.stringify para transformar esos strings a lista y poder manipular la lista del carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
    carrito.push({ nombre, precio }); 
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
    alert(`✅${nombre} ha sido agregado al carrito✅`);
}


//Función mostrar carrito, para la página carrito.html
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []; //JSON.parse transforma los strings que captura el localstorage del navegador en un arreglo de objetos, para poder mostrarlos
    const carritoBody = document.getElementById('carrito'); //Se obtiene el elemento de id carrito
    carritoBody.innerHTML = ''; // Limpiar elcontenido del carrito
    let total = 0;
    carrito.forEach((producto, index) => { //Se consiguen los productos de index.html por su indice
    total += producto.precio;              //Se suma el precio de todos los que hayan para generar el total
    carritoBody.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>`;
    });

    if (carrito.length === 0) {
    carritoBody.innerHTML =
        '<tr><td colspan="3">No hay productos en el carrito.</td></tr>';
    }

    document.getElementById("total").innerText = `Total: $${total}`;
}


//Para eliminar cosas del carrito, mediante su indice
function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []; //localstorage consigue los productos almacenados en formato string del navegador --> JSON.parse los transforma a arreglo para poder modificarlos
    carrito.splice(index, 1); // Eliminar el producto del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito)); //JSON.stringify convierte la lista modificada a String, así localStorage la toma denuevo, ya sincronizada
    mostrarCarrito(); // Actualizar la vista del carrito con la función de más arriba
}