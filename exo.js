//Exo 1
let paragraphe1 = document.getElementById("is-integer");

if(Number.isInteger(paragraphe1)) {
    paragraphe1.innerHTML += " ==> est un nombre entier";
}
else {
    paragraphe1.innerHTML += " ==> n'est pas un nombre entier";
}

//Exo 2
let paragraphe2 = document.getElementById("is-nan");
if(isNaN(paragraphe2)) {
    paragraphe2.innerHTML += " ==> est NaN";
}
else {
    paragraphe2.innerHTML += " ==> est un nombre";
}

//Exo 3
let paragraphe3 = document.getElementById("parse-float");
let change = Number.parseFloat(52.563 * 18);

//let nouvelle = paragraphe3.replace("52.563", change);
paragraphe3.innerHTML = change + "% de la population blablabla";

//Exo 4
let paragraphe4 = document.getElementById("parse-int");
change = Number.parseInt("65"/ 18);
console.log();
paragraphe4.innerHTML = change + " px";

//Exo 5
let paragraphe5 = document.getElementById("to-fixed");
change = 41.9596;
paragraphe5.innerHTML = change.toFixed(2);
