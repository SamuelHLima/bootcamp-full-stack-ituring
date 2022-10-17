var n1 = prompt("Digite um número:");
var n2 = prompt("Digite um número:");
var n3 = prompt("Digite um número:");

function maiorDosTres() {
    var a = Array.prototype.sort.call(arguments);
    alert( "O maior número é: " + a[a.length - 1] + " e o menor é: " + a[0]);
}

maiorDosTres(n1, n2, n3);Q
