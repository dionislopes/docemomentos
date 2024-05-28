document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
      document.body.classList.add('loaded');
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const closeMenu = document.querySelector('.close-menu'); // Add this if you have a close button

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });

  // Optional: If you have a close button or want to close the menu when clicking outside of it
  document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          navMenu.classList.remove('active');
      }
  });

  // Modal image viewer
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  const closeModal = document.getElementsByClassName("close")[0];

  // Assuming you have images in your kits that open in a modal
  document.querySelectorAll('.card-kit img').forEach(img => {
      img.addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.src;
      });
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = "none";
  });

  // Rating functionality
  const stars = document.querySelectorAll('.star');
  const submitRatingButton = document.getElementById('submit-rating');

  stars.forEach(star => {
      star.addEventListener('click', function() {
          const rating = this.getAttribute('data-value');
          stars.forEach(s => s.classList.remove('selected'));
          for (let i = 0; i < rating; i++) {
              stars[i].classList.add('selected');
          }
      });
  });

  submitRatingButton.addEventListener('click', function() {
      const selectedStars = document.querySelectorAll('.star.selected').length;
      if (selectedStars > 0) {
          alert(`Você avaliou ${selectedStars} estrelas.`);
          // Aqui você pode adicionar a lógica para enviar a avaliação ao servidor
      } else {
          alert('Por favor, selecione uma estrela para enviar sua avaliação.');
      }
  });
});
