

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
    const Educacion = document.querySelector('#Educacion');

    const divEducacion = document.createElement('DIV');
    divEducacion.innerHTML = `
    <p>Platzi</p>
    <span>27-Diciembre-2022</span>

    <p>Udemy</p>
    <span>21-Agosto-2023</span>
    
    <p>Ingles-Udemy</p>
    <span>10-Enero-2024</span>
    `;

    Educacion.appendChild(divEducacion);


}
mostrarEducacion();