
// Guardar producto en local
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Agarro id del index
const divMerch = document.getElementById('div-merch')

// Llamamos al .json
fetch('./products.json')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        // Guardar array completo
        guardarLocal("listaProductos", JSON.stringify(data));
        // Mostrar en HTML
        data.forEach(p => {
            divMerch.innerHTML += `
            <div class="card" style="width: 18rem; margin-left: 20px; margin-bottom: 20px;">
                <img class="card-img-top" src=${p.img} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">$${p.precio}</p>
                    <button onclick="agregarAlCarrito(${p.id})" id="boton${p.id}">Agregar al Carrito</button>
                </div>
            </div>
            `
        });
    })

// Recuperar array de objetos
const prods = localStorage.getItem("listaProductos")
const parseProds = JSON.parse(prods)

let carrito = []

// Agregar producto al carrito
const agregarAlCarrito = (pid) => {
    console.log('carrito',carrito)
    const existe = carrito.some(prod => prod.id === pid)
    console.log(existe)

    if(existe){
        const prod = carrito.map (prod => {
            prod.id === pid && prod.cantidad++
        })
    } else {
        const item = parseProds.find((prod) => prod.id === pid)
        carrito.push(item)
    }

    actualizarCarrito()
}

const contadorCarrito = document.getElementById(`contadorCarrito`)

const contenedorCarrito = document.getElementById(`carrito-contenedor`)

const precioTotal = document.getElementById(`precioTotal`)


let total = 0

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}

const sumarProd = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    item.cantidad++;
    actualizarCarrito();

  };

const restarProd = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    if (item.cantidad > 1) {
      item.cantidad--;
      actualizarCarrito();
    }
  };

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement(`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML = `
        <ul>
            <li>${prod.nombre}</li>
            <li>Precio: $${prod.precio}</li>
            <div style="display: flex;flex-direction:row;">
                <button style="margin-right: 10px;" onclick = "sumarProd(${prod.id})" class="boton-sumar"<i>+</i></button>
                <p style="margin-right: 10px;"><span id="cantidad">${prod.cantidad}</span></p>
                <button style="margin-right: 10px;" onclick = "restarProd(${prod.id})" class="boton-restar"<i>-</i></button>
                <button style="margin-right: 10px;" onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"<i>🗑</i></button>
            </div>
            
        </ul>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    });
    
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito
    .map((item) => item.precio * item.cantidad)
    .reduce((prev, current) => prev + current, 0);

}



const botonComprar = document.getElementById(`buy`)

botonComprar.addEventListener(`click`, () =>{
    carrito.length = 0
    actualizarCarrito()
})


botonComprar.onclick = function(){
        
        Swal.fire({
        title: 'Listo!',
        text: `Gracias por comprar con nosotros!`,
        icon: 'success',
        })

        botonComprar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })

        localStorage.removeItem(`carrito`)

 }


const botonVaciar = document.querySelector(`#vaciar-carrito`)

botonVaciar.addEventListener(`click`, () =>{
    carrito.length = 0
    actualizarCarrito()
})

const delet = document.querySelector("#vaciar-carrito")

delet.onclick = function(){

      Swal.fire({
        
        title: 'Listo!',
        text: 'Has vaciado el carrito!',
        icon: 'success',
        
    })
        botonVaciar.addEventListener(`click`, () =>{
            carrito.length = 0
            actualizarCarrito()
        })
        
        localStorage.removeItem(`carrito`)
    
    }