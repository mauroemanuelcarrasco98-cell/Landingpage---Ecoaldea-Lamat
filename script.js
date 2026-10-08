/* ===================================================
   LÓGICA JAVASCRIPT - ECO-ALDEA LAMAT
   =================================================== */

   document.addEventListener("DOMContentLoaded", () => {
    // 1. GENERACIÓN AUTOMÁTICA DEL ÍNDICE DE CONTENIDOS
    crearIndiceDinamico();
  
    // 2. CREACIÓN DEL BOTÓN "VOLVER ARRIBA"
    crearBotonVolverArriba();
  });
  
  function crearIndiceDinamico() {
    const mainContent = document.querySelector(".main-content");
    const titulos = mainContent.querySelectorAll("h1");
  
    if (titulos.length === 0) return;
  
    // Contenedor principal del índice
    const navIndice = document.createElement("nav");
    navIndice.className = "tabla-contenidos";
    navIndice.id = "indice-navegacion";
  
    const tituloIndice = document.createElement("h2");
    tituloIndice.textContent = "📍 Índice de Contenidos";
    navIndice.appendChild(tituloIndice);
  
    const lista = document.createElement("ul");
  
    titulos.forEach((titulo, index) => {
      // Asignar un ID a cada h1 para enlace de ancla
      const idAncla = `seccion-${index + 1}`;
      titulo.id = idAncla;
  
      // Crear el elemento de lista e hipervínculo
      const item = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.href = `#${idAncla}`;
      enlace.textContent = `${index + 1}. ${titulo.textContent}`;
  
      item.appendChild(enlace);
      lista.appendChild(item);
    });
  
    navIndice.appendChild(lista);
  
    // Insertar el índice antes de la sección principal
    mainContent.parentNode.insertBefore(navIndice, mainContent);
  }
  
  function crearBotonVolverArriba() {
    const btn = document.createElement("button");
    btn.id = "btnTop";
    btn.innerHTML = "↑";
    btn.title = "Volver arriba";
    document.body.appendChild(btn);
  
    // Mostrar el botón cuando la página se desplaza
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  
    // Evento al hacer clic en el botón
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }