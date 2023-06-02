//------------------Sweet Alert con timeOut asincronico
setTimeout(() => {
    Swal.fire({
        title: '¡No te olvides de nuestros martes y jueves de descuentos en efectivo o transferencia!',
        imageUrl: './img/oferta.png',
        imageWidth: 350,
        imageHeight: 200,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Bienvenido ya puedes seguir comprando!')
        }
    })
}, 2000);
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
buttonSend.addEventListener('click', function () {
    const nombreUsuario = inputUser.value;
    if (!nombreUsuario) {
        console.log("Ingresaste un usuario invalido");
    } else {
        localStorage.setItem('nombreUsuario', nombreUsuario);
        tittle.textContent = "Bienvenido a tu tienda online, " + nombreUsuario;
    }
})
//Verificar si ya hay un usuario cargado 
window.addEventListener('DOMContentLoaded', function () {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        tittle.textContent = "Bienvenido a tu tienda online, " + nombreUsuario;
    }
});

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

function sumarIVA(precio) {
    let precioConIva = precio * 1.21;
    return precioConIva;
}

//Crear lista de productos en el HTML con JavaScript
const productsList = document.createElement('ul');
productsList.id = 'lista-productos';

products.forEach((producto) => {
    const li = document.createElement('li');
    const productName = document.createTextNode(producto.nombre);
    const productPrice = document.createTextNode(producto.precio + "$");
    li.appendChild(productName);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(productPrice);
    productsList.appendChild(li);

    // Agregar evento click al elemento de la lista
    li.addEventListener('click', function () {
        const productoSeleccionado = products[Array.from(productsList.children).indexOf(li)];
        const totalConIVA = sumarIVA(productoSeleccionado.precio);

        // Almacenar los datos de la compra en localStorage
        localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
        localStorage.setItem('totalConIVA', totalConIVA);

        // Obtener el contenedor donde mostrar los productos
        const productosContainer = document.getElementById('productos-container');

        // Crear elementos HTML para mostrar la información del producto
        const precioProducto = document.createElement('h2');
        const nombreProducto = document.createElement('h2');
        nombreProducto.textContent = 'Producto: ' + productoSeleccionado.nombre;
        precioProducto.textContent = 'Precio con IVA: ' + totalConIVA;

        // Limpiar el contenedor antes de agregar los nuevos elementos
        // productosContainer.innerHTML = '';

        // Agregar los elementos al contenedor
        productosContainer.appendChild(nombreProducto);
        productosContainer.appendChild(precioProducto);
    });
});

document.body.appendChild(productsList);
const listaItems = productsList.getElementsByTagName('li');

//Crear las ofertas en el HTML desde el JSON local y promesa 
document.getElementById('ofertBtn').addEventListener('click', cargarOFERTAS)
function cargarOFERTAS() {
    fetch('products.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (oferta) {
                html += `
            <li>${oferta.nombre} ${oferta.precio + "$"}</li>
            `
            })
            document.getElementById('imprimir').innerHTML = html;
            //Agregar el mismo evento que los productos
            document.getElementById('imprimir').addEventListener('click', function (event) {
                const li = event.target;
                const ofertaSeleccionada = data[Array.from(li.parentNode.children).indexOf(li)];
                const totalConIVA = sumarIVA(ofertaSeleccionada.precio);

                localStorage.setItem('productoSeleccionado', JSON.stringify(ofertaSeleccionada));
                localStorage.setItem('totalConIVA', totalConIVA);

                const productosContainer = document.getElementById('productos-container');
                const precioProducto = document.createElement('h2');
                const nombreProducto = document.createElement('h2');
                nombreProducto.textContent = 'Producto: ' + ofertaSeleccionada.nombre;
                precioProducto.textContent = 'Precio con IVA: ' + totalConIVA;

                productosContainer.innerHTML = '';
                productosContainer.appendChild(nombreProducto);
                productosContainer.appendChild(precioProducto);
            });

        })

}
