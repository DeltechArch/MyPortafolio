

function mostrarPerfil() {

    const sectionPerfil = document.getElementById("Perfil");

    const h1Perfil = document.createElement("h1");
    h1Perfil.innerHTML = "JUAN DELGADILLO <br> Software Developer.";

    const pPerfil = document.createElement("p");
    pPerfil.innerHTML = "Apasionado por la tecnologia y programacion. <br> En busqueda de retos.";

    sectionPerfil.appendChild(h1Perfil);
    sectionPerfil.appendChild(pPerfil);
}
mostrarPerfil();


function mostrarEducacion(){
    const sectionEducacion = document.getElementById("Educacion");

    h1Educacion = document.createElement("h1");
    h1Educacion.innerHTML = "Educacion:";
    divEducacion = document.createElement("div");

    //primer educacion    
    h2Platzi =  document.createElement("h2");
    h2Platzi.innerHTML = "Platzi";
    pPlatzi =  document.createElement("p");
    pPlatzi.innerHTML ="27/Diciembre/2022";

    // otra educacion
    h2Udemy = document.createElement("h2");
    h2Udemy.innerHTML = "Udemy";
    pUdemy =  document.createElement("p");
    pUdemy.innerHTML ="21/agosto/2023";

    divEducacion.appendChild(h2Platzi);
    divEducacion.appendChild(pPlatzi);
    divEducacion.appendChild(h2Udemy);
    divEducacion.appendChild(pUdemy);
    
    sectionEducacion.appendChild(h1Educacion);
    sectionEducacion.appendChild(divEducacion);
}
mostrarEducacion();