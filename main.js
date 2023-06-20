alert("Bienvenid@ a mi tienda! :)")

const productos = [
    {nombre: "Remera Linkin Park", precio: 5000 },
    {nombre: "Buzo Linkin Park", precio: 8000 },
    {nombre: "Disco Linkin Park", precio: 2000 },
    {nombre: "Vinilo Linkin Park", precio: 4000 }
]

let total = 0
let continuar

function sumaPrecio(totalCompra, precioProducto) {
    console.log(totalCompra, precioProducto)
    return totalCompra + precioProducto
}


do{
    const opcion = parseInt(prompt(`Que producto desea comprar?:
    1. Remera Linkin Park
    2. Buzo Linkin Park
    3. Disco Linkin Park
    4. Vinilo Linkin Park`))

    if(opcion === 1 ){
        total = sumaPrecio(total, productos[0].precio)
        continuar = prompt("Desea agregar otro producto? (si/no)").toLowerCase()
    } else if(opcion === 2){
        total = sumaPrecio(total, productos[1].precio)
        continuar = prompt("Desea agregar otro producto? (si/no)").toLowerCase()
    } else if(opcion === 3){
        total = sumaPrecio(total, productos[2].precio)
        continuar = prompt("Desea agregar otro producto? (si/no)").toLowerCase()
    } else if(opcion === 4){
        total = sumaPrecio(total, productos[3].precio)
        continuar = prompt("Desea agregar otro producto? (si/no)").toLowerCase()
    } else {
        alert("Porfavor ingrese una opcion valida (ejemplo 1)")
    } 


} while(continuar !== "no" )

alert(`Gracias por tu compra! Tu total es de $${total}`)





















