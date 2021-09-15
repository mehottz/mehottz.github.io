var botao = document.getElementById('fatorial');
var click = new Event("click");
botao.addEventListener("click", function(){
    var valor = document.getElementById("fatorial").value;
    var imprime = document.getElementById("imprime");
    var i;
    var fatorial = 1;
    for(i = 1; i <= valor; i++){
        fatorial *= i;
    }
    imprime.textContent = "O fatorial do " + valor + " é " + fatorial;
});

botao.dispatchEvent(click); 