/* 

// Array de imagens
const imagens = [
    { src: 'caminho/imagem1.jpg', alt: 'Descrição 1' },
    { src: 'caminho/imagem2.jpg', alt: 'Descrição 2' },
    { src: 'caminho/imagem3.jpg', alt: 'Descrição 3' }
];

// Função para adicionar todas as imagens
function adicionarGaleria(imagens) {
    const galeria = document.getElementById('galeria');
    
    imagens.forEach(imagemInfo => {
        const imagem = document.createElement('img');
        imagem.src = imagemInfo.src;
        imagem.alt = imagemInfo.alt;
        galeria.appendChild(imagem);
    });
}

// Chamando a função
adicionarGaleria(imagens);

*/


