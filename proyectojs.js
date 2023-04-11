let nombreUsuario = prompt("Bienvenido a tu tienda, ingresa tu nombre de usuario: ");
if (nombreUsuario == "") {
    alert("Ingresaste un usuario invalido:");
} else {
    alert("Bienvenido a tu tienda online " + nombreUsuario);
}

let pantalon = 8000;
let camisa = 9500;
let zapatillas = 24000;

function calcularIVA(precio) {
    return (precio * 0.21);
}

let elegirProducto;
do { elegirProducto = prompt ("Elegi tu producto: \n Pantalon 8000$ \n Camisa 9500$ \n Zapatillas 24000$ \n Salir para finalizar")
if (elegirProducto == "Pantalon") 
alert("Elegiste Pantalon 8000$ tu total es:" + pantalon + calcularIVA);
if (elegirProducto == "Camisa") 
alert("Elegiste Camisa 9500$ tu total es:" + camisa + calcularIVA);
if (elegirProducto == "Zapatillas") 
alert("Elegiste Zapatillas 24000$ tu total es:" + zapatillas + calcularIVA);
else if (elegirProducto !== "Salir"){
    alert ("Elegi una opcion valida.");
}
}while (elegirProducto !== "Salir");
