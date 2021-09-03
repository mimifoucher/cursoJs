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

let pedirUno = parseInt(prompt("Escribir número uno"));

for( ;pedirUno <=10; pedirUno++){
    console.log(pedirUno);
}


//Simulador Interactivo
//Este ejercicio realiza la suma de los productos seleccionados por el usuario y devuelve el total a pagar

const productoUno = prompt("Ingrese el nombre del primer producto");
const precioUno = parseInt(prompt("Ingrese el precio del primer producto")) ;
const productoDos = prompt("Ingrese el nombre del segundo producto");
const precioDos = parseInt(prompt("Ingrese el precio del segundo producto"));

sumaProductos(precioUno,precioDos);

function sumaProductos(precioPrimerProducto, precioSegundoProducto){
    const precioTotal = precioPrimerProducto + precioSegundoProducto;
    console.log(precioTotal);
}




