var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");

botao1.addEventListener("click", () => {
    var link1 = document.getElementById("link1");
    var descricao1 = document.getElementById("descricao1");
    sessionStorage.setItem("link", link1.value)
    sessionStorage.setItem("descricao", descricao1.value)
})
botao2.addEventListener("click", () => {
    var link2 = document.getElementById("link2");
    var descricao2 = document.getElementById("descricao2");
    sessionStorage.setItem("link", link2.value)
    sessionStorage.setItem("descricao", descricao2.value)
})