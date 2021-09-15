var impressao = document.getElementById("imprime");
var i;
var resultado = 0;
var j = 0;
var k = 1;

impressao.innerHTML += "1º número de Fibonacci: "+ j +" <br>";
impressao.innerHTML += "2º número de Fibonacci: "+ k +" <br>";

for(i = 3; i <= 100; i= i+1){
    resultado = j + k;
    j = k;
    k = resultado;
    impressao.innerHTML += i + "º número de Fibonacci: "+ resultado +" <br>";
}