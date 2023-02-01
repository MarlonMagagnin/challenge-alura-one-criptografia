//TRANSFORMANDO AS LETRAS EM MINUSCULAS
function transformarLetras(){
    let texto_de_entrada = document.getElementById("texto_de_entrada");
    texto_de_entrada.value = texto_de_entrada.value.toLowerCase();
}
//LISTA DAS PALAVRAS CHAVES QUE DEVEM SER TROCADAS
let Obj = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};
//FUNCAO DE CODIFICAR FAZENDO A TROCAS DAS PALAVRAS
function codificar() {
    let texto_entrada = document.getElementById("texto_de_entrada").value;
    let texto_saida = document.getElementById("texto_de_saida").innerHTML = texto_de_saida
    let RE = new RegExp(Object.keys(Obj).join("|"), "gi");
    texto_saida.innerHTML = texto_entrada.replace(RE, function (matched) {
        return Obj[matched];
    });

};
//LISTA COM AS LETRAS PARA A DECODIFICACAO
let Obj2 = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u"
};
//FUNCAO PARA DECODIFICAR O TEXTO
function decodificar() {
    let texto_entrada = document.getElementById("texto_de_entrada").value;
    let texto_saida = document.getElementById("texto_de_saida").innerHTML = texto_de_saida
    let RE = new RegExp(Object.keys(Obj2).join("|"), "gi");
    texto_saida.innerHTML = texto_entrada.replace(RE, function (matched) {
        return Obj2[matched];
    });

}

//Recarregar a página.
function recarregarAPagina(){
    window.location.reload(true);
}
//BOTAO PARA COPIAR O TEXTO QUE ESTÁ CODIFICADO
function copiarTexto() {
    let textoCopiado = document.getElementById("texto_de_saida");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
