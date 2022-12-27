// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');


//Eventos
eventListteners();
function eventListteners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//Clases



//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    console.log(Number( presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ){
        windows.location.reload();
    }
}
