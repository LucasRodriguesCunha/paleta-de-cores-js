// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letrasHex = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para atualizar a paleta de cores
function atualizarPaleta() {
    const quadrados = document.querySelectorAll('.quadrado');
    quadrados.forEach(quadrado => {
        const corAleatoria = gerarCorAleatoria();
        quadrado.style.backgroundColor = corAleatoria;
        quadrado.querySelector('p').textContent = corAleatoria;
    });
}

// Event listener para o botão de gerar nova paleta
const botaoGerarPaleta = document.querySelector('button');
botaoGerarPaleta.addEventListener('click', atualizarPaleta);

// Inicializa a paleta ao carregar a página
atualizarPaleta();