var btn1 = document.getElementById("botao1");

btn1.addEventListener("click", ()=>{
    sessionStorage.setItem("link", document.getElementById("link1").value);
    sessionStorage.setItem("descricao", document.getElementById("descricao1").value);
})