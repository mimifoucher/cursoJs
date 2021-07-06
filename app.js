//Primer Desafio

/* const nombre = prompt("Cual es tu nombre?");

console.log("Mi nombre es " + nombre); */

//Segundo Desafio


// const pago = prompt ("Pagas con transferencia bancaria?");

// if (pago == "si") {
//     alert ("Tenes un 10% de descuento en tu compra");

//     const total = prompt ("Cual es el monto total de la compra?");
//     if (parseInt(total) >= 3000) {
//         alert("Tenes otro 10% de descuento");
//     } else {
//         alert ("No tenes otro 10% de descuento");
//     }
// } else {
//     alert ("No obtenes descuento");
// }


//Tercer Desafío

// for (let i = 0; i <= 50; i += 5) {
//     console.log (i);
// }


//Cuarto Desafio

// function edadPromedio() {
//     const edad1=parseInt(prompt("Cual es tu edad?"));
//     const edad2=parseInt(prompt("Cual es tu edad?"));
//     const edad3=parseInt(prompt("Cual es tu edad?"));
//     const edad4=parseInt(prompt("Cual es tu edad?"));
//     const edad5=parseInt(prompt("Cual es tu edad?"));

//     alert(Math.round(edad1+edad2+edad3+edad4+edad5)/5);
// }

// edadPromedio();

// function calcularIva() {
//     let costo = parseInt(prompt('¿Cuál es el costo?'));
//     let iva = costo * 0.21;
//     alert(`El IVA es de ${iva}`);
// }

// calcularIva();



//Desafío Cinco

class Alumne {
    constructor(nombre,nota1,nota2,nota3){
        this.nombre=nombre;
        this.nota1=parseInt(nota1);
        this.nota2=parseInt(nota2);
        this.nota3=parseInt(nota3);
    }

    promedioNotas(){
        const notaFinal=(this.nota1 + this.nota2 + this.nota3) / 3;
        console.log(`El alumne ${this.nombre} obtiene un promedio de ${notaFinal}`);

        return `El alumne ${this.nombre} obtiene un promedio de ${notaFinal}`;
    }

}
  
function crearAlumne(){

    const nombre = prompt('Cual es tu nombre?');
    const nota1 = prompt('Cual es tu primer nota?');
    const nota2 = prompt('Cual es tu segunda nota?');
    const nota3 = prompt('Cual es tu tercera nota?');

    return new Alumne (nombre, nota1, nota2, nota3);
}

crearAlumne().promedioNotas();