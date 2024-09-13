document.addEventListener("DOMContentLoaded", function () {
  // Animaciones al hacer scroll
  const sections = document.querySelectorAll("section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Verificar al cargar la página

  // Inicializar el mapa
  const map = L.map("mapa").setView([-27.46784, -58.83067], 17); // Coordenadas de la Plaza 25 de Mayo, Corrientes

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
    map
  );

  L.marker([-27.46784, -58.83067])
    .addTo(map)
    .bindPopup(
      "Escribano Julian Simon<br>Cerca de Plaza 25 de Mayo, Corrientes"
    )
    .openPopup();

  // Manejar el envío del formulario
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por su mensaje. Nos pondremos en contacto pronto.");
    form.reset();
  });

  // Animación de desplazamiento suave para los enlaces de navegación
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Ajuste para el header fijo
          behavior: "smooth",
        });
      }
    });
  });
});
