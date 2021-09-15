var impressao = document.getElementById("imprime");
var i, j, ehPrimo;

for(i = 1; i <= 1000; i= i+1){
    ehPrimo = true;
    for(j = 2; j <= i / 2; j++){
        if(i % j == 0){
            ehPrimo = false;
            break;
        }
    }
    if(!ehPrimo)
        continue;
    impressao.innerHTML += i +" <br>";
}