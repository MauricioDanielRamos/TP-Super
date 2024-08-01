/* FUNCIONA PERO NO VIMOS FLAG*/
let alertaMostrada = false;
setTimeout(function(){
    if (!alertaMostrada) {
        Swal.fire({
            title: "No te vayas sin ver nuestras ofertas!!!",
            footer: '<a href="./pages/productos.html">IR A OFERTAS</a>'
        });
        alertaMostrada = true; // Actualizamos la bandera para indicar que la alerta ya se mostró
    }
}, 12000);
/* Si lo dejo asi, cada 12 segundos se muestra el alerta (re molesto) por eso use el de arriba.
    setTimeout(function(){
        alert(`No te olvides de contactarnos !!!!! `);
        }, 12000);
*/

/*Funcion para mostrar alerta 5 segundos despues de ingresar a la página*/
let intervalo = 5;
let i = intervalo;
function cuentaRegre(){
    let intervaloInt = setInterval(function() {
        if (i == 0) {
            clearInterval(intervaloInt); // limpio intervalo
            Swal.fire({
                title: "No te olvides de completar el formulario!!!",
                footer: '<a href="./pages/form.html">IR A FORMULARIO</a>'
            });
        }else {
            i--;
        }
    }, 1000);
}
cuentaRegre();