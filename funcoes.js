
let Obj = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function criptografar() {
    let texto_entrada = document.getElementById("texto_de_entrada").value;
    let texto_saida = document.getElementById("texto_de_saida").innerHTML = texto_de_saida
    let RE = new RegExp(Object.keys(Obj).join("|"), "gi");
    texto_saida.innerHTML = texto_entrada.replace(RE, function (matched) {
        return Obj[matched];
    });

};

let Obj2 = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u"
};

function descriptografar() {
    let texto_entrada = document.getElementById("texto_de_entrada").value;
    let texto_saida = document.getElementById("texto_de_saida").innerHTML = texto_de_saida
    let RE = new RegExp(Object.keys(Obj2).join("|"), "gi");
    texto_saida.innerHTML = texto_entrada.replace(RE, function (matched) {
        return Obj2[matched];
    });

}


/* Tem uma funcionalidade a mais para recarregar a página.
function recarregarAPagina(){
    window.location.reload(true);
}*/

function copiarTexto() {
    let textoCopiado = document.getElementById("texto_de_saida");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
