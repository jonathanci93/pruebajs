let nombreUsuario = prompt("Bienvenido a tu tienda, ingresa tu nombre de usuario: ");
if (nombreUsuario == "") {
    alert("Ingresaste un usuario invalido:");
} else {
    alert("Bienvenido a tu tienda online " + nombreUsuario);
}

let pantalon = 8000;
let camisa = 9500;
let zapatillas = 24000;

function sumarIVA(precio) {
    let precioConIva = precio * 1.21;
    return (precioConIva);
}

let elegirProducto;
do {
    elegirProducto = prompt("Elegi tu producto: \n Pantalon 8000$ \n Camisa 9500$ \n Zapatillas 24000$ \n Salir para finalizar")

    if (elegirProducto == "Pantalon") {
        alert("Elegiste Pantalon 8000$ tu total es: " + sumarIVA(pantalon) + " con IVA");
    }

    if (elegirProducto == "Camisa") {
        alert("Elegiste Camisa 9500$ tu total es: " + sumarIVA(camisa) + " con IVA");
    }

    if (elegirProducto == "Zapatillas") {
        alert("Elegiste Zapatillas 24000$ tu total es: " + sumarIVA(zapatillas) + " con IVA");
    }
    else if (elegirProducto !== "Salir") {
        alert("Gracias por tu compra.");
    }
} while (elegirProducto !== "Salir");

