var km;
var age;
var priceKm = 0.21;
var discount20 = 0.20;
var discount40 = 0.40;
var totalPrice;

km = prompt("Quanti km vuoi percorrere");
age = prompt("Quanti anni hai?")

var totalPrice = priceKm * km;
console.log("Il prezzo del biglietto e' " + totalPrice +" €");

if( parseInt(age) < 18){
  totalPrice = totalPrice * (1-discount20);
  console.log("Poichè sei minorenne, il tuo biglietto costera' invece " + totalPrice.toFixed(2) +" €");
}

if( parseInt(age) > 65){
  totalPrice = totalPrice * (1-discount40);
  console.log("Visto che sei vecchio, il tuo biglietto costera' invece " + totalPrice.toFixed(2) +" €");
}