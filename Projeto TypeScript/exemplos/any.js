"use strict";
let valorAny;
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('ola', 'como vai?');
