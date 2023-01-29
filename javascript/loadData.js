var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");

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
botao3.addEventListener("click", () => {
    var link3 = document.getElementById("link3");
    var descricao3 = document.getElementById("descricao3");
    sessionStorage.setItem("link", link3.value)
    sessionStorage.setItem("descricao", descricao3.value)
})


