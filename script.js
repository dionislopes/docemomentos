// Função para rolar suavemente para uma determinada seção ao clicar em um link do menu
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth' // Adiciona o efeito de rolagem suave
      });
  }
}

// Adiciona um evento de clique a todos os links do menu de navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link (navegar para outra página)
      const sectionId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
      scrollToSection(sectionId); // Rola suavemente para a seção alvo
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtenha o modal
  var modal = document.getElementById("modal");

  // Obtenha a imagem e o modal de imagem
  var modalImg = document.getElementById("imgModal");

  // Obtenha todas as imagens de kits
  var kitImages = document.querySelectorAll(".card-kit img");

  // Para cada imagem de kit, adicione um evento de clique
  kitImages.forEach(function(img) {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Obtenha o botão de fechar (lupa)
  var span = document.getElementsByClassName("close")[0];

  // Quando o botão de fechar é clicado, feche o modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // Quando o usuário clica fora da imagem, feche o modal
  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
