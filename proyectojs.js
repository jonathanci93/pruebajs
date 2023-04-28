let nombreUsuario = prompt("Bienvenido a tu tienda, ingresa tu nombre de usuario: ");
if (nombreUsuario == "") {
    alert("Ingresaste un usuario invalido:");
} else {
    alert("Bienvenido a tu tienda online " + nombreUsuario);
}
let productos = [
    {nombre: "Pantalon", precio: 8000},
    {nombre: "Camisa", precio: 9500},
    {nombre: "Zapatillas", precio: 24000}
];


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
        alert("Elegi una opcion valida.");
    }
} while (elegirProducto !== "Salir") {
    alert("Te esperamos pronto!")
}

