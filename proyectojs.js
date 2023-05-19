
//Guardar nombre del usuario y tomar el titulo por ID
const tittle = document.getElementById('titulo');
let userName = localStorage.getItem('userName');
//input-------------------------------------------------
const inputUser = document.createElement('input');
inputUser.type = 'text';
inputUser.placeholder = 'Ingresa tu nombre de usuario';
document.body.appendChild(inputUser);
//boton de enviar
const buttonSend = document.createElement('button');
buttonSend.textContent = 'Enviar';
document.body.appendChild(buttonSend);
//Evento del usuario name + el localstorage
buttonSend.addEventListener('click', function(){
    const nombreUsuario = inputUser.value;
    if (!nombreUsuario){
        console.log("Ingresaste un usuario invalido");
    } else {
        localStorage.setItem('nombreUsuario', nombreUsuario);
        tittle.textContent = "Bienvenido a tu tienda online, " + nombreUsuario;
    }
})
//Objeto productos 
const products = [
    { nombre: "Pantalon", precio: 8000 },
    { nombre: "Camisa", precio: 9500 },
    { nombre: "Zapatillas", precio: 24000 },
    { nombre: "Pantalon premium", precio: 10000 },
    { nombre: "Camisa premium", precio: 10500 },
    { nombre: "Zapatillas premium", precio: 26000 }
];
//Funcion IVA
function sumarIVA(precio){
    let precioConIva = precio * 1.21;
    return precioConIva;
}

//Crear lista de productos en el HTML con JavaScript
const productsList = document.createElement('ul');
productsList.id = 'lista-productos';

products.forEach((producto)=>{
        const li = document.createElement('li');
        const productName = document.createTextNode(producto.nombre);
        const productPrice = document.createTextNode(producto.precio + "$");
        li.appendChild(productName);
        li.appendChild(document.createTextNode(' '));
        li.appendChild(productPrice);
        productsList.appendChild(li);
    })
    document.body.appendChild(productsList)
const listaItems = productsList.getElementsByTagName('li');
//Compra
for (let i = 0; i < listaItems.length; i++) {
    listaItems[i].addEventListener('click', function () {
        const productoSeleccionado = products[i];
        const totalConIVA = sumarIVA(productoSeleccionado.precio);
        
        // Almacenar los datos de la compra en localStorage
        localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
        localStorage.setItem('totalConIVA', totalConIVA);
    });
}