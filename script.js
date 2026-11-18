const imagens = ["img/img1.png", "img/img2.png", "img/img3.png"];
let posicao = 0;

const imagem = document.getElementById("imagem");
const botaoVoltar = document.getElementById("voltar");
const botaoAvancar = document.getElementById("avancar");

botaoAvancar.addEventListener("click", function () {
    posicao++;
    if (posicao >= imagens.length) {
        posicao = 0;
    }
    imagem.src = imagens[posicao];
});

botaoVoltar.addEventListener("click", function () {
    posicao--;
    if (posicao < 0) {
        posicao = imagens.length - 1;
    }
    imagem.src = imagens[posicao];
});