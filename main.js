
// Array de productos
const productos = [
    {id: 1, nombre: "Remera Linkin Park", precio: 5000 },
    {id: 2, nombre: "Buzo Linkin Park", precio: 8000 },
    {id: 3, nombre: "Disco Linkin Park", precio: 2000 },
    {id: 4, nombre: "Vinilo Linkin Park", precio: 4000 }
]

// Guardar producto en local
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// Guardar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

// Recuperar array de objetos
const prods = localStorage.getItem("listaProductos")
const parseProds = JSON.parse(prods)

// Agarro id del index
const divMerch = document.getElementById('div-merch')

// Inserto HTML a ese id del index con el array recuperado y parseado
parseProds.forEach(p => {
    divMerch.innerHTML += `
    <div style="border: 1px solid black; width: 16%; margin-bottom:20px; padding-left: 20px; padding-bottom:20px">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button id="boton${p.id}">Agregar al Carrito</button>
    </div>
    `
});

// Agarro los botones
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")

// Le agrego event listeners a los botones
boton1.addEventListener("click", click1)
boton2.addEventListener("click", click2)
boton3.addEventListener("click", click3)
boton4.addEventListener("click", click4)

// Agarro div de carrito
const divCarrito = document.getElementById('div-carrito')
const totalCompra = document.getElementById('total')


// Variables 
let total = 0

// Respuesta botones
function click1(){
    total = total + productos[0].precio
    totalCompra.textContent = 'Total:' + ' ' + total
    divCarrito.innerHTML += `
    <ul>
        <li>${productos[0].nombre} $${productos[0].precio}</li>
    </ul>
    `
}

function click2(){
    total = total + productos[1].precio
    totalCompra.textContent = 'Total:' + ' '  + total
    divCarrito.innerHTML += `
    <ul>
        <li>${productos[1].nombre} $${productos[1].precio}</li>
    </ul>
    `
}

function click3(){
    total = total + productos[2].precio
    totalCompra.textContent = 'Total:' + ' '  + total
    divCarrito.innerHTML += `
    <ul>
        <li>${productos[2].nombre} $${productos[2].precio}</li>
    </ul>
    `
}

function click4(){
    total = total + productos[3].precio
    totalCompra.textContent = 'Total:' + ' '  + total
    divCarrito.innerHTML += `
    <ul>
        <li>${productos[3].nombre} $${productos[3].precio}</li>
    </ul>
    `
}


// Funcion para sumar el total de compra
function sumaPrecio(totalCompra, precioProducto) {
    console.log(totalCompra, precioProducto)
    return totalCompra + precioProducto
}
























