//Primer Desafio

// const nombre = prompt("Cual es tu nombre?");

// console.log("Mi nombre es " + nombre); 

// const edad = prompt("Cual es tu edad?");

// const edadCumple= parseInt(edad)+1;

// console.log("El proximo año tendrás " + edadCumple);


//Segundo Desafio - Crear un Algoritmo con un condicional

// let edad = prompt("Cual es tu edad?");

// if(edad <= 18){
//     alert("No puede ingresar al sitio ya que es menor de edad");
// }else{
//     alert("Bienvenido al nuestro sitio");
// }


//Tercer Desafío

//Este ejercicio calcula del 1 al 10

// let pedirUno = parseInt(prompt("Escribir número uno"));

// for( ;pedirUno <=10; pedirUno++){
//     console.log(pedirUno);
// }


//Simulador Interactivo
//Este ejercicio realiza la suma de los productos seleccionados por el usuario y devuelve el total a pagar

// const productoUno = prompt("Ingrese el nombre del primer producto");
// const precioUno = parseInt(prompt("Ingrese el precio del primer producto")) ;
// const productoDos = prompt("Ingrese el nombre del segundo producto");
// const precioDos = parseInt(prompt("Ingrese el precio del segundo producto"));

// sumaProductos(precioUno,precioDos);

// function sumaProductos(precioPrimerProducto, precioSegundoProducto){
//     const precioTotal = precioPrimerProducto + precioSegundoProducto;
//     console.log(precioTotal);
// }

//Entrega Desafío Objetos y Arrays

//Utilización de clases 
class Producto{
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    productoSeleccionado(){
        console.log("El producto " + this.nombre + " ha sido sumado al carrito de compras")
    }
}

// Creación de objeto
const producto1 = new Producto("Lentejas","1 kilo",300);
const producto2 = new Producto("Porotos","500 gramos",150);
const producto3 = new Producto("Garbanzos","1 kilo",320);
producto2.productoSeleccionado();

let carrito = [];
//Utilización de algunos métodos Arrays

//Agregar productos al carrito
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);
console.log(carrito);
//Elimina un producto del carrito
carrito.pop();
console.log(carrito);