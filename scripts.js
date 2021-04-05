var valorEmAnosLuz = prompt("Qual o valor em Anos-luz que você quer converter?");
var valorEmAnosLuzNumero = parseFloat(valorEmAnosLuz);


var valorEmKm = valorEmAnosLuzNumero * 9.460536068016;
var valorEmKmFixado = valorEmKm.toFixed(2);

alert(valorEmKmFixado + " Trilhões de Km");
