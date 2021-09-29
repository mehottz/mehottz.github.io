const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

var questao1 = () =>{
    var texto = (document.getElementById("texto1").value).split("");
    var textoInvertido = [];
    texto.forEach((letra) => {
        textoInvertido.unshift(letra);
    });
    var impressao = document.getElementById("imprime1");
    impressao.textContent = textoInvertido.join("");
}

var questao2 = () =>{
    var texto = (document.getElementById("texto2").value).split("");
    var textoNovo = [];
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    texto.forEach((letra) => {
        if(vogais.indexOf(letra.toLowerCase()) != -1)
            textoNovo.push("<strong>"+letra+"</strong>");
        else
            textoNovo.push(letra);
    });
    var impressao = document.getElementById("imprime2");
    impressao.innerHTML = textoNovo.join("");
}

var questao3 = () =>{
    // a barata diz que tem sete saias de filó, é mentira da barata, ela tem é uma só
    var palavras = (document.getElementById("texto3").value).trim().split(" ");
    var contarPalavras = [];
    var palavraArray = [];
    var palavrasLimpas = palavras.map(function(palavra){
        return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g,"").replace(/ {2,}/g," ");
    });
    palavraArray["palavra"] = palavrasLimpas[0];
    palavraArray["qtde"] = 1;
    contarPalavras.push(palavraArray);

    let jaTem;
    var i;
    var j;
    for(i = 1 ; i < palavrasLimpas.length; i=i+1){
        jaTem = false;
        for(j = 0; j < contarPalavras.length ; j=j+1){
            if(palavrasLimpas[i] == contarPalavras[j]["palavra"]){
                contarPalavras[j]["qtde"] += 1;
                jaTem = true;
            }
        }
        if(!jaTem){
            palavraArray = [];
            palavraArray["palavra"] = palavrasLimpas[i];
            palavraArray["qtde"] = 1;
            contarPalavras.push(palavraArray);
        }
    }
    var impressao = document.getElementById("imprime3");
    var linha;
    var celulaPalavraObj;
    var celulaQtdeObj;
    var palavraTexto;
    var qtdeTexto;
    impressao.innerHTML = "";

    contarPalavras.forEach((palavra) =>{
        celulaPalavraObj = document.createElement("td");
        celulaQtdeObj = document.createElement("td");
        linha = document.createElement("tr");
        palavraTexto = document.createTextNode(palavra["palavra"]);
        qtdeTexto = document.createTextNode(palavra["qtde"]);
        celulaPalavraObj.appendChild(palavraTexto);
        celulaQtdeObj.appendChild(qtdeTexto);
        linha.appendChild(celulaPalavraObj);
        linha.appendChild(celulaQtdeObj);
        impressao.appendChild(linha);
    });
}

var questao4 = () =>{
    // a barata diz que tem sete saias de filó, é mentira da barata, ela tem é uma só
    var palavras = (document.getElementById("texto4").value).trim().split(" ");
    var contarPalavras = [];
    var palavraArray = [];
    var palavrasLimpas = palavras.map(function(palavra){
        return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g,"").replace(/ {2,}/g," ");
    });
    palavraArray["palavra"] = palavrasLimpas[0];
    palavraArray["qtde"] = 1;
    contarPalavras.push(palavraArray);

    let jaTem;
    var i;
    var j;
    for(i = 1 ; i < palavrasLimpas.length; i=i+1){
        jaTem = false;
        for(j = 0; j < contarPalavras.length ; j=j+1){
            if(palavrasLimpas[i] == contarPalavras[j]["palavra"]){
                contarPalavras[j]["qtde"] += 1;
                jaTem = true;
            }
        }
        if(!jaTem){
            palavraArray = [];
            palavraArray["palavra"] = palavrasLimpas[i];
            palavraArray["qtde"] = 1;
            contarPalavras.push(palavraArray);
        }
    }
    var impressao = document.getElementById("imprime4");
    let posPalavraMaiorOcor = 0;

    for(i = 0; i < contarPalavras.length; i++){
        if(contarPalavras[i]["qtde"] > contarPalavras[posPalavraMaiorOcor]["qtde"]){
            posPalavraMaiorOcor = i;
        }
    }
    impressao.innerHTML = "A palavra <strong>" + contarPalavras[posPalavraMaiorOcor]["palavra"] + "</strong> ocorreu " + contarPalavras[posPalavraMaiorOcor]["qtde"] + " vezes";
}

var questao5 = () =>{
    // a barata diz que tem sete saias de filó, é mentira da barata, ela tem é uma só
    var texto = document.getElementById("texto5").value;
    var procurar = document.getElementById("procurada5").value;
    var substituir = document.getElementById("substituir5").value;

    const regex = new RegExp(procurar, "gi");
    var novoTexto = texto.replace(regex, substituir);
    var impressao = document.getElementById("imprime5");
    impressao.innerHTML = novoTexto;
}

var questao6 = () =>{
    var data = new Date(document.getElementById("texto6").value);
    var diff = calcDiffsDatas(data, new Date());

    var impressao = document.getElementById("imprime6");
    impressao.innerHTML = diff + " dias decorridos desde " + document.getElementById("texto6").value;
}

var questao7 = () =>{
    var value = document.getElementById("texto7").value;
    let data = value.split('/');
    if(data.length != 3){
        alert("Data em formato inválido");
        return;
    }

    var dataObj = new Date();
    dataObj.setDate(data[0]);
    dataObj.setMonth(data[1] - 1);
    dataObj.setYear(data[2]);

    var dataEmTexto = dataObj.getDate() + " de " + meses[dataObj.getMonth()] + " de " + dataObj.getFullYear();

    var impressao = document.getElementById("imprime7");
    impressao.innerHTML = dataEmTexto;
}

var questao8 = () =>{
    var data1 = new Date(document.getElementById("data-1-8").value);
    var data2 = new Date(document.getElementById("data-2-8").value);
    var diff;
    if(data1 < data2)
        diff = calcDiffsDatas(data1, data2) + 1;
    else
        diff = calcDiffsDatas(data2, data1) + 1;

    var qtdSemanas = parseInt(diff / 7);
    var impressao = document.getElementById("imprime8");
    impressao.innerHTML = qtdSemanas + " semanas entre estas datas ";
}

var questao9 = () =>{
    var texto = document.getElementById("texto9").value;
    let regTexto =  /^[a-zA-Z]*$/;
    let regTextoNumero = /^[a-zA-Z0-9]*$/;
    let regTextoNumeroCaractere = /^[a-zA-Z0-9@#!$%&,-=+.<>;:]*$/;

    let resposta;
    if(regTexto.test(texto))
        resposta = "<span style='color:red;'>fraca</span>";
    else if (regTextoNumero.test(texto))
        resposta = "<span style='color:orange;'>moderada</span>";
    else if (regTextoNumeroCaractere.test(texto))
        resposta = "<span style='color:green;'>forte</span>";

    var impressao = document.getElementById("imprime9");
    impressao.innerHTML = resposta;
}

var questao10 = () => {
    var texto = (document.getElementById("texto10").value).split("");

    var tenis = ["T", "E", "N", "I", "S"];
    var polar = ["P", "O", "L", "A", "R"];

    let regMaiuscula = /^[A-Z]*$/;

    var posicaoLetraEncontrada;
    var novaLetra;
    var ehMaiuscula;
    var novoTexto = [];

    texto.forEach((letra) => {
        posicaoLetraEncontrada = null;
        if(tenis.indexOf(letra.toUpperCase()) != -1){
            posicaoLetraEncontrada = tenis.indexOf(letra.toUpperCase());
            novaLetra = polar[posicaoLetraEncontrada];
        } else if(polar.indexOf(letra.toUpperCase()) != -1){
            posicaoLetraEncontrada = polar.indexOf(letra.toUpperCase());
            novaLetra = tenis[posicaoLetraEncontrada];
        }

        if(posicaoLetraEncontrada != null){
            ehMaiuscula = regMaiuscula.test(letra);
            novaLetra = !ehMaiuscula ? novaLetra.toLowerCase() : novaLetra;
            novoTexto.push(novaLetra);
        } else
            novoTexto.push(letra);
    });

    var impressao = document.getElementById("imprime10");
    impressao.innerHTML = novoTexto.join("");
}

window.onload = function(){
    var botao = document.getElementById('executar1');
    botao.addEventListener("click", questao1);

    var botao = document.getElementById('executar2');
    botao.addEventListener("click", questao2);

    var botao = document.getElementById('executar3');
    botao.addEventListener("click", questao3);

    var botao = document.getElementById('executar4');
    botao.addEventListener("click", questao4);

    var botao = document.getElementById('executar5');
    botao.addEventListener("click", questao5);

    var botao = document.getElementById('executar6');
    botao.addEventListener("click", questao6);

    $(".data-com-picker").datepicker({
        dateFormat: "dd/mm/yy",
        monthNames: meses
    });

    var botao = document.getElementById('executar7');
    botao.addEventListener("click", questao7);

    var botao = document.getElementById('executar8');
    botao.addEventListener("click", questao8);

    var botao = document.getElementById('executar9');
    botao.addEventListener("click", questao9);

    var botao = document.getElementById('executar10');
    botao.addEventListener("click", questao10);
}

function calcDiffsDatas(dataAnterior, dataPosterior){
    return Math.round((dataPosterior - dataAnterior)/ (1000 * 60 * 60 * 24)) - 1;
}

