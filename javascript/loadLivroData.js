var btn1 = document.getElementById("botao1");
var btn2 = document.getElementById("botao2");
var btn3 = document.getElementById("botao3");
var btn4 = document.getElementById("botao4");
var btn5 = document.getElementById("botao5");
var btn6 = document.getElementById("botao6");
var btn7 = document.getElementById("botao7");
var btn8 = document.getElementById("botao8");

btn1.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link1").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao1").value);

})
btn2.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link2").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao2").value);
})
btn3.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link3").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao3").value);
})
btn4.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link4").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao4").value);
})
btn5.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link5").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao5").value);
})
btn6.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link6").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao6").value);
})
btn7.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link7").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao7").value);
})
btn8.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link8").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao8").value);
})
