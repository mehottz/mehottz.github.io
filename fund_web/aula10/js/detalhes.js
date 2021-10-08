window.onload = function() {
    let receita = {};
    receita.nome = sessionStorage.getItem("nome");
    receita.descricao = sessionStorage.getItem("descricao");
    receita.foto = sessionStorage.getItem("foto");
    receita.ingredienteList = sessionStorage.getItem("ingredientes").split(",");
    receita.preparoList = sessionStorage.getItem("preparo").split(",");

    document.querySelector(".container").appendChild(carregaReceita(receita));
    carregaIngredientes(receita.ingredienteList);
    carregaModoPreparo(receita.preparoList);

}

function carregaReceita(receita) {
    let divReceita = document.createElement("div");
    let htmlStr = `<div class="row">
            <div class="col-xs-6">
                <h1 class="text-center">${receita.nome}</h1>
            </div>
            <div class="col-xs-2 offset-xs-4">
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star-empty"></i>
            </div>
        </div>
        <div class="row">
            <img src="${receita.foto}" class="img-thumbnail">
        </div>
        <div class="row">
            <p>${receita.descricao}</p>
        </div>
        <div class="row">
            <h3>Ingredientes</h3>
            <ul id="ingrediente"></ul>
        </div>
        <div class="row">
            <h3>Modo de Preparo</h3>
            <ol id="preparo">
            </ol>
        </div>`;
    divReceita.innerHTML = htmlStr;
    return divReceita;
}

function carregaIngredientes(ingredientes){
    let ul = document.querySelector("#ingrediente");
    let li;
    let liTexto;
    ingredientes.forEach((ingrediente) => {
        li = document.createElement("li");
        liTexto = document.createTextNode(ingrediente);
        li.appendChild(liTexto);
        ul.appendChild(li);
    });
}

function carregaModoPreparo(modoPreparo){
    let ul = document.querySelector("#preparo");
    let li;
    let liTexto;
    modoPreparo.forEach((passo) => {
        li = document.createElement("li");
        liTexto = document.createTextNode(passo);
        li.appendChild(liTexto);
        ul.appendChild(li);
    });
}