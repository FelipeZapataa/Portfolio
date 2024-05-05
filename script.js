const proyecto = document.getElementById("proyectos")
const sobremi = document.getElementById("me")
const titulo = document.getElementById("titulo")
const habilidades = document.getElementById("habilidades")
const contactame = document.getElementById("contactame")
const modalSinretorno = document.getElementById("modal-sinretorno")
const modalCerrar = document.getElementById("modal-cerrar")
const modalAbrir = document.getElementById("sinretorno")
const iframe1 = document.getElementById("iframe1")

function proyectos() {
    titulo.textContent = "Proyectos";
    proyecto.style.display = "flex";
    habilidades.style.display = "none";
    sobremi.style.display = "none";
    contactame.style.display = "none";
}

function sobre_mi() {
    titulo.textContent = "Sobre mí";
    proyecto.style.display = "none";
    habilidades.style.display = "none";
    sobremi.style.display = "flex";
    contactame.style.display = "none";
}

modalAbrir.addEventListener("click", ()=> { 
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