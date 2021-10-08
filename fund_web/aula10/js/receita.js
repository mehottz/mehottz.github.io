window.onload = function () {
    getReceita();
    var lista;
    document.querySelector(".container").addEventListener("click"
    , function(evento) {
        
        if(evento.target && evento.target.nodeName == "BUTTON") {
            let botaoClicado = evento.target;
            let receitaId = botaoClicado.id;
            let receita = getReceitaById(receitaId);
            console.log(receita);
            sessionStorage.setItem("nome",receita.nome);
            sessionStorage.setItem("descricao",receita.descricao);
            sessionStorage.setItem("foto", receita.foto);
            sessionStorage.setItem("ingredientes", receita.ingredientes);
            sessionStorage.setItem("preparo", receita.preparo);

            window.location.href = `receita.html`;
        }
        
    });
}

function getReceitaById(receitaId) {
    let receitaEscolhida = lista.find(function(receita){
        return receita.id == receitaId;
    });
    return receitaEscolhida;
}


function getReceita() {
    let url = `https://157.230.5.17/receitas.php`;
    //criando o XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    let receitasList;
    //configurando o evento de mudança de estado
    xhttp.onreadystatechange = () => {
        //o estado que interessa é o 4 - requisição finalizada 
        // e status = 200 - deu tudo certo
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            receitasList = JSON.parse(xhttp.responseText);
            lista = receitasList;
            receitasList.forEach(function(receita){
                criaDivReceita(receita);
            })
        } else if (xhttp.readyState == 4 && xhttp.status!=200) {
            console.log("deu zebra na requisição");
        }
    };
    

    xhttp.open("GET", url, true);
    //configure o Header se a requisição for POST. Exemplo:
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //se a requisição for POST, envie os parâmetros via função send.
    xhttp.send();
}


function criaDivReceita(receita) {
    let divObj = document.createElement("div");
    divObj.classList.add("receita");
    //carregando a figura com o nome da receita na div.receita
    divObj.appendChild(carregaFigura(receita));
    //carregar a descrição da receita
    divObj.appendChild(carregaDescricao(receita));
    //adicionando na página
    document.querySelector(".container").appendChild(divObj);
}

function carregaFigura(receita) {
    let divObj = document.createElement("div");
    let figureObj = document.createElement("figure");
    let imgObj = document.createElement("img");
    let figcaptionObj = document.createElement("figcaption");
    imgObj.src = receita.foto;
    imgObj.classList.add("img-thumbnail");
    figcaptionObj.innerHTML = receita.nome;
    figureObj.classList.add("col-xs-12");
    figureObj.appendChild(imgObj);
    figureObj.appendChild(figcaptionObj);
    divObj.appendChild(figureObj);
    divObj.classList.add("row");
    return divObj;
/*
<div class="row">
                <figure class="col-xs-12">
                    <img src="./img/fig1.jpg" class="img-thumbnail">
                    <figcaption>Nome da Receita</figcaption>
                </figure>
            </div>
            */
}

function carregaDescricao(receita) {
    let divRowObj = document.createElement("div");
    let divElementosObj = document.createElement("div");
    let pDescObj =  document.createElement("p");
    let buttonObj =  document.createElement("button");
    divRowObj.classList.add("row", "align-items-center");
    divElementosObj.classList.add("col-xs-12");
    pDescObj.innerHTML = receita.descricao;
    buttonObj.classList.add("btn" ,"btn-primary");
    buttonObj.id = receita.id;
    buttonObj.innerHTML = "Veja Mais";
    divElementosObj.appendChild(pDescObj);
    divElementosObj.appendChild(buttonObj);
    divRowObj.appendChild(divElementosObj);
    return divRowObj;
    
}
/*
<div class="receita">
            
    
<div class="row">
                <div class="col-xs-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet  velit in dui lacinia euismod ac a nibh. Cras mattis nisi id neque  molestie, quis commodo nibh ornare. Vivamus posuere felis nunc, id  posuere mauris vehicula sit amet. 
                    </p>
                    <button class="btn btn-primary">Veja Mais</button>
                </div>
            </div>
                    
        </div>
*/