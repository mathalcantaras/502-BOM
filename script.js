// function mostrarCoordenadas(event){
//     if(event.pageY < 11){
//         alert("Você deseja mesmo sair desse perfeito site?")
//     }
//     else{
//         console.log(`Eixo X: ${event.pageX} e Eixo Y: ${event.pageY}`);
//     }
// }
// window.onmousemove = mostrarCoordenadas;

// let texto = document.querySelector("h1");
// texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;

let botao = document.querySelector("button");
let texto = document.querySelector("h2");
let caixaTexto = document.querySelector("input");
let naoSou = document.querySelector("a");
let div = document.querySelector("div");
let section = document.querySelector("section");

function guardarNome() {
    localStorage.setItem("nome", caixaTexto.value);
    div.style.display = "none";
    texto.innerHTML = `Seja bem vindo! ${localStorage.nome}.`;
    naoSou.innerHTML = `Não é ${localStorage.nome}? Clique aqui.`;
    naoSou.onclick = limparNome;
}
function limparNome() {
    localStorage.clear()
}

if (localStorage.nome) {
    div.style.display = "none";
    texto.innerHTML = `Seja bem vindo! ${localStorage.nome}.`;
    naoSou.innerHTML = `Não é ${localStorage.nome}? Clique aqui.`;
    naoSou.onclick = limparNome;
}
else{
    botao.onclick = guardarNome;
}
