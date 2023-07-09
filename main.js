alert("Bienvenid@ a mi tienda! :)")

// Array de productos
const productos = [
    {nombre: "Remera Linkin Park", precio: 5000 },
    {nombre: "Buzo Linkin Park", precio: 8000 },
    {nombre: "Disco Linkin Park", precio: 2000 },
    {nombre: "Vinilo Linkin Park", precio: 4000 }
]

// Variables 
let total = 0
let continuar

// Funcion para sumar el total de compra
function sumaPrecio(totalCompra, precioProducto) {
    console.log(totalCompra, precioProducto)
    return totalCompra + precioProducto
}

// Bucle de compra
do{
    // Prompt eleccion de producto
    let opcion = prompt(`Que producto desea comprar?:
    - Remera Linkin Park
    - Buzo Linkin Park
    - Disco Linkin Park
    - Vinilo Linkin Park`)

    console.log(opcion)

    // Find producto en Array
    let productoCliente = productos.find(p => p.nombre === opcion)

    // Si no encuentra el producto
    if(!productoCliente){
        alert("Producto no encontrado, porfavor revisar bien el nombre del producto deseado!")
        opcion = prompt(`Que producto desea comprar?:
        - Remera Linkin Park
        - Buzo Linkin Park
        - Disco Linkin Park
        - Vinilo Linkin Park`)
    
        productoCliente = productos.find(p => p.nombre === opcion)
    }

    // Si encuentra el producto
    console.log(productoCliente)
    // Al total le mando funcion con total y precio del producto elegido
    total = sumaPrecio(total, productoCliente.precio)
    // Agregar otro producto o no
    continuar = prompt("Desea agregar otro producto? (si/no)").toLowerCase()

// Final del bucle
} while(continuar !== "no" )

// Alerta del total de la compra
alert(`Gracias por tu compra! Tu total es de $${total}`)





















