let presupuestoIngresado = document.querySelector('#presupuesto-ingresado');
const nombreGasto = document.querySelector('#nombre-gasto');
const montoGasto =  document.querySelector('#monto-gasto');
const btnAgregarGasto = document.querySelector('#btn-agregar-gasto');
const presupuesto =  document.querySelector('#presupuesto');
const presupuestoActualizado = document.querySelector('#presupuesto-actualizado');
const btnAgregarPresupuesto = document.querySelector('#btn-agregar-presupuesto');
const btnBorrar = document.querySelector('#btn-borrar');
const seccionGasto = document.querySelector('.seccion-gastos');


// Div presupuesto
let divGastos = document.querySelector("#gastos");
let divPresupuesto = document.querySelector('#div-presupuesto');
let listado = document.querySelector('#listado');



divGastos.style.display = "none";
listado.style.display = "none";



// Evento para incorporar el presupuesto


function accion() {
   divPresupuesto.style.display = "none";
   document.getElementById("presupuesto").innerHTML = `Su presupuesto es : $ ${presupuestoIngresado.value}` ;
   listado.style.display = "block";
   divGastos.style.display = "block";

}



btnAgregarPresupuesto.addEventListener("click", accion);


// Accion borrar

btnBorrar.addEventListener("click", accionBorrar);

function accionBorrar() {
    divPresupuesto.style.display = "block"
    listado.style.display = "none";
    divGastos.style.display = "none";
    
    
}


// Agregar Gasto

function agregarGasto() {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `
    <div class="alert alert-danger mt-3 resumen" role="alert"> 
    <p>Nombre del Gasto: ${nombreGasto.value}</p>
    <p>Importe : ${montoGasto.value}</p>
    <button class="btn btn-danger">X</button> </div> `
    document.body.appendChild(contenedor);

}

btnAgregarGasto.addEventListener("click", agregarGasto);









