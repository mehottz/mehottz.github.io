var impressao = document.getElementById("imprime");
var i;
var resultado = 0;
for(i = 0; i <= 1000; i= i+2){
    resultado += i;
}
impressao.innerHTML = "A soma de todos os números pares positivos até 1000 é: "+ resultado +" <br>";