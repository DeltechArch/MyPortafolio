

function mostrarPerfil() {

    const sectionPerfil = document.getElementById("Perfil");
    const imagenPerfil = document.createElement("img");
    imagenPerfil.setAttribute("src", "./assets/imagens/yonew2.avif");
    imagenPerfil.setAttribute("alt", "imagen de perfil");

    const h1Perfil = document.createElement("h1");
    h1Perfil.innerHTML = "JUAN DELGADILLO <br> Software Developer.";

    const pPerfil = document.createElement("p");
    pPerfil.innerHTML = "Apasionado por la tecnologia y programacion. <br> En busqueda de retos.";

    sectionPerfil.appendChild(imagenPerfil);
    sectionPerfil.appendChild(h1Perfil);
    sectionPerfil.appendChild(pPerfil);
}
mostrarPerfil();


function mostrarEducacion(){
    const sectionEducacion = document.getElementById("Educacion");

    h1Educacion = document.createElement("h1");
    h1Educacion.innerHTML = "Educacion en Desarrollo Web";
    divEducacion = document.createElement("div");
    h2Educacion =  document.createElement("h2");
    h2Educacion.innerHTML = "Platzi";
    pEducacion =  document.createElement("p");
    pEducacion.innerHTML ="27/Diciembre/2022";

    divEducacion.appendChild(h2Educacion);
    divEducacion.appendChild(pEducacion);
    sectionEducacion.appendChild(h1Educacion);
    sectionEducacion.appendChild(divEducacion);
}
mostrarEducacion();