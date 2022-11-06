//defino valor de Entrada
const valorTicket = 200;


//defino valor de descuento

var descuentoEstudiantes = 0.2;
var descuentoTrainee = 0.5;
var descuentoJunior = 0.85;
var descuentoNulo = 1

//calculo datos de los imputs
/*
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementByIda("cant");
let categoria = document.getElementById("tipo");*/

function totalAPagar()
{
var cantidadDeEntradas = parseInt(document.getElementById("cantidad").value);
var subtotal = (cantidadDeEntradas*valorTicket);
var select = document.getElementById("cate");
var seleccionCategoria = select.options[select.selectedIndex].value;

var promo = 0;

switch (seleccionCategoria= (parseInt(seleccionCategoria))) 
{
    case 1:
        promo= descuentoEstudiantes
        break;

    case 2:
        promo= descuentoTrainee
        break;
        
    case 3:
        promo= descuentoJunior
        break;
        
    case 4:
        promo= descuentoNulo
        break;
}

var valorTotal = (subtotal*promo);

console.log(valorTotal);

document.getElementById("aPagar").value = valorTotal

}

function nada()

{
    document.getElementById("nombre").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cate").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("aPagar").value = "";
    
}

