var botao = document.getElementById('calcula');
var click = new Event("click");
botao.addEventListener("click", function(){
    var base = parseInt(document.getElementById("base").value);
    var expoente = document.getElementById("expoente").value;
    var impressao = document.getElementById("imprime");
    var i;
    var resultado;
    impressao.innerHTML = "";
    for(i = 0; i <= expoente; i++){
        resultado = Math.pow(base, i);
        impressao.innerHTML += base + " ^ " + i + " = " + resultado + " <br>";
    }
});

botao.dispatchEvent(click); // deixa o texto exibido sem precisar do click