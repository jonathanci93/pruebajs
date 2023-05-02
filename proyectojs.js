//*PROPAGANDA
const PROPAGANDA = [
    { nombre: "Tenemos los mejores productos premium" },
    { nombre: "Productos premium y clasicos todos los talles" },
    { nombre: "Seguridad y envios express" }
]

PROPAGANDA.forEach((textos) => {
    alert(textos.nombre)
});
//* INICIO PROGRAMA USUARIO
let nombreUsuario = prompt("Bienvenido a tu tienda, ingresa tu nombre de usuario: ");
if (nombreUsuario == "") {
    alert("Ingresaste un usuario invalido:");
} else {
    alert("Bienvenido a tu tienda online " + nombreUsuario);
}
//*PRODUCTOS
let productos = [
    { nombre: "Pantalon", precio: 8000 },
    { nombre: "Camisa", precio: 9500 },
    { nombre: "Zapatillas", precio: 24000 },
    { nombre: "Pantalon premium", precio: 10000 },
    { nombre: "Camisa premium", precio: 10500 },
    { nombre: "Zapatillas premium", precio: 26000 }
];

//*FUNCION IVA
function sumarIVA(precio) {
    let precioConIva = precio * 1.21;
    return (precioConIva);
}

//*ELECCION DE PRODUCTOS
let elegirProducto;
do {
    elegirProducto = prompt("Elegi tu producto: \n 1- Pantalon 8000$ \n 2- Camisa 9500$ \n 3- Zapatillas 24000$ \n 4- Pantalon premium 10000$ \n 5- Camisa premium 10500$ \n 6- Zapatillas premium 26000$  \n 7- Salir para finalizar")
    let opcionSeleccionada = Number(elegirProducto) - 1;
    if (opcionSeleccionada >= 0 && opcionSeleccionada < productos.length) {
        let productoSeleccionado = productos[opcionSeleccionada];
        alert("Elegiste " + productoSeleccionado.nombre + " " + productoSeleccionado.precio + "$ tu total es: " + sumarIVA(productoSeleccionado.precio) + " con IVA");
    }
    else if (elegirProducto !== "7") {
        alert("Elegi una opcion valida.");
    }
} while (elegirProducto !== "7");
alert("Te esperamos pronto!");
