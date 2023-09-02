function logar() {
var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;
var AcessoNegado = document.getElementById("mensagem");


if (nome == "Igorio29" && senha == "10012007"){
    window.location.replace("welcome.html")
} else if (nome == "Eliezer" && senha == "123456789") {
    window.location.replace("welcome.html")
} 
else {
    alert("Acesso negado")
}
}

var mostrarsenha = document.getElementById('MostrarSenha');
var senhainput = document.getElementById('senha');
var icone = document.getElementById('cadeado')
let senhavisivel = false

mostrarsenha.addEventListener("click", function(event) {
    event.preventDefault();
    if (senhainput.type == "password") {
        senhainput.type = "text";
        cadeado.src = "./src/img/cadeado.png";
    } else {
        senhainput.type = "password"
        cadeado.src = "./src/img/1001008.png"
}

})