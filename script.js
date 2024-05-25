document.addEventListener("DOMContentLoaded", function() {
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

  // Modal de imagens
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  const kitImages = document.querySelectorAll(".card-kit img");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Adiciona evento de clique a todas as imagens de kits
  kitImages.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Fecha o modal ao clicar no botão de fechar
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Fecha o modal ao clicar fora da imagem
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Seção de avaliação
  const stars = document.querySelectorAll('.rating-input .star');
  let selectedRating = 0;
  let totalRatings = 0;
  let ratingSum = 0;

  // Adiciona evento de clique a todas as estrelas de avaliação
  stars.forEach(star => {
    star.addEventListener('click', function() {
      selectedRating = parseInt(this.getAttribute('data-value'));
      updateStarSelection(selectedRating);
    });
  });

  // Envia a avaliação do usuário
  document.getElementById('submit-rating').addEventListener('click', function() {
    if (selectedRating > 0) {
      totalRatings++;
      ratingSum += selectedRating;
      const averageRating = (ratingSum / totalRatings).toFixed(1);
      document.getElementById('average-value').textContent = averageRating;
      alert(`Você avaliou ${selectedRating} estrelas! Avaliação média: ${averageRating} estrelas.`);
    } else {
      alert('Por favor, selecione uma avaliação.');
    }
  });

  // Atualiza a seleção de estrelas
  function updateStarSelection(rating) {
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  // Menu responsivo
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
