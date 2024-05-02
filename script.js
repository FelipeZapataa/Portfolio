const proyecto = document.getElementById("proyectos")
const sobremi = document.getElementById("me")
const titulo = document.getElementById("titulo")
const habilidades = document.getElementById("habilidades")
const contactame = document.getElementById("contactame")

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

