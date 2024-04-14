function redirecionar() {
    var texto = document.getElementById("txt").value.toLowerCase();
    if (texto === 'pronome' || texto === 'pronomes') {
        window.location.href = "pronomes.html"; // pronomes
    } else if (texto === 'adjetivo' || texto === 'adjetivos') {
        window.location.href = "add.html"; // adjetivos
    } else if (texto === 'substantivo' || texto === 'substantivos') {
        window.location.href = "substantivo.html"; // substantivos
    } else if (texto === 'mas e mais' || texto === 'mas') {
        window.location.href = "mm.html" // mas e mais
    } else if (texto === 'mais' || texto === 'mas'){
        window.location.href == "mm.html" // mas e mais
    } else if (texto === 'mais e mas') {
        window.location.href = "mm.html" // mas e mais
    } else if (texto === 'porques' || texto === 'porquês') {
        window.location.href = "pq.html" // porquês
    } else if (texto === 'm e n' || texto === 'n e m') {
        window.location.href = "mano.html" // N e M
    } else if (texto === 'advérbios' || texto === 'adverbios') {
        window.location.href = "adv.html.html" // Advérbios
    } else if (texto === 'as vezes' || texto === 'às vezes') {
        window.location.href = "as.html" // as vezes
    } else if (texto === 'as vezes e às vezes' || texto === 'às vezes e as vezes') {
        window.location.href = "as.html" // as vezes
    } else if (texto === 'verbo' || texto === 'verbos') {
        window.location.href = "verbo.html" // verbos
    } else if (texto === 'conjugação de verbos' || texto === 'conjugacao verbal') {
        window.location.href = "cnj.html" // conjugação verbal
    }  else if (texto === 'conjugação de verbos' || texto === 'conjugação verbal') {
        window.location.href = "cnj.html" // conjugação verbal
    } else if (texto === 'preposicoes' || texto === 'preposicao') {
        window.location.href = " prp.html" // preposição
    } else if (texto === 'preposições' || texto === 'preposição') {
        window.location.href = "prp.html" // preposição
    } else if (texto === 'artigo' || texto === 'artigos') {
        window.location.href = "lock.html" // artigos
    } else if (texto === 'locução adverbial' || texto === 'locuções adverbiais') {
        window.location.href = "art.html" // locução adverbial
    } else if (texto === 'locucao adverbial' || texto === 'locucoes adverbiais') {
        window.location.href = "art.html" // locução adverbial
    } else if (texto === 'modo verbal' || texto === 'modos verbais') {
        window.location.href = "md.html" // modo verbal
    } else if (texto === 'transição verbal' || texto === 'transição de verbos') {
        window.location.href = "Transi.html" // transição verbal
    } else if (texto === 'transicao verbal' || texto === 'transicao de verbos') {
        window.location.href = "Transi.html" // transição verbal
    } else if (texto === 'intransição verbal' || texto === 'intransição de verbos') {
        window.location.href = "int.html" // intransição verbal
    } else if (texto === 'intransicao verbal' || texto === 'intransicao de verbos') {
        window.location.href = "int.html" // intransição verbal
    } else if (texto === 'crases' || texto === 'crase') {
        window.location.href = "crs.html" // crase
    } else if (texto === 'acento' || texto === 'acentos') {
        window.location.href = "acnt.html" // acento
    } else if (texto === 'pronome oblíquo' || texto === 'pronomes oblíquos') {
        window.location.href = "prn.html" // pronome oblíquo
    } else if (texto === 'pronome obliquo' || texto === 'pronomes obliquos') {
        window.location.href = "prn.html" // pronome oblíquo
    } else {
        var input = document.getElementById("txt");
        input.placeholder = "Inválido!";
        input.value = "";
        input.blur();
    }

}

function redirecionarAoPressionarEnter(event) {
    if (event.keyCode === 13) {
        redirecionar()
    }
}