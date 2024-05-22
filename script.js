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
