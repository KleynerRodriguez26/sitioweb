
const filtroBtns = document.querySelectorAll(".filtro-btn");
const destinoCards = document.querySelectorAll(".destino-card");


filtroBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const region = btn.getAttribute("data-region");

    destinoCards.forEach((card) => {
      if (region === "todos" || card.classList.contains(region)) {
        card.style.display = "block"; 
      } else {
        card.style.display = "none"; 
      }
    });
  });
});
