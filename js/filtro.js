
const filtros = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".tarjeta");

filtros.forEach(filtro => {
  filtro.addEventListener("click", () => {
    const categoria = filtro.getAttribute("data-categoria");

    tarjetas.forEach(tarjeta => {
      if (categoria === "todos") {
        tarjeta.style.display = "block"; 
      } else if (tarjeta.getAttribute("data-categoria") === categoria) {
        tarjeta.style.display = "block"; 
      } else {
        tarjeta.style.display = "none"; 
      }
    });
  });
});
