const proyecto = document.getElementById("proyectos")
const sobremi = document.getElementById("me")
const titulo = document.getElementById("titulo")
const habilidad = document.getElementById("habilidades")
const contactame = document.getElementById("contactame")
const modalSinretorno = document.getElementById("modal-sinretorno")
const modalCerrar = document.getElementById("modal-cerrar")
const modalCerrar2 = document.getElementById("modal-cerrar2")
const modalAbrirSinRetorno = document.getElementById("sinretorno")
const modalAbrirK96Store = document.getElementById("k96")
const modalK96Store = document.getElementById("modal-k96")
const iframe1 = document.getElementById("iframe1")
const iframe2 = document.getElementById("iframe2")


function contactos() {
  titulo.textContent = "Contáctame";
  proyecto.style.display = "none";
  habilidad.style.display = "none";
  sobremi.style.display = "none";
  contactame.style.display = "flex";
}

function habilidades() {
  titulo.textContent = "Habilidades";
  proyecto.style.display = "none";
  habilidad.style.display = "flex";
  sobremi.style.display = "none";
  contactame.style.display = "none";
}

function proyectos() {
    titulo.textContent = "Proyectos";
    proyecto.style.display = "flex";
    habilidad.style.display = "none";
    sobremi.style.display = "none";
    contactame.style.display = "none";
}

function sobre_mi() {
    titulo.textContent = "Sobre mí";
    proyecto.style.display = "none";
    habilidad.style.display = "none";
    sobremi.style.display = "flex";
    contactame.style.display = "none";
}

modalAbrirSinRetorno.addEventListener("click", ()=> { 
  modalSinretorno.showModal(); 
  iframe1.src = 'https://sinretorno.es'
  iframe1.style.display = 'block';
})
modalCerrar.addEventListener("click", ()=> { modalSinretorno.close(iframe1.src = ' '); })
modalSinretorno.addEventListener('click', (e) => {
  if (e.target === modalSinretorno) {
    iframe1.src = ' '
    modalSinretorno.close();
  }
});

modalAbrirK96Store.addEventListener("click", ()=> { 
  modalK96Store.showModal(); 
  iframe2.src = 'https://k96store.com/'
  iframe2.style.display = 'block';
})
modalCerrar2.addEventListener("click", ()=> { modalK96Store.close(iframe2.src = ' '); })
modalK96Store.addEventListener('click', (e) => {
  if (e.target === modalK96Store) {
    iframe2.src = ' '
    modalK96Store.close();
  }
});