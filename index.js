const express = require('express');
const app = express();

// Configurar a pasta de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado. Acesse http://localhost:${port} em seu navegador.`);
});
// Abrir modal ao clicar no link de download
const downloadLink = document.querySelector('.download-link');
const modal = document.querySelector('.modal');

downloadLink.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
});

// Fechar modal ao clicar fora da área do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
