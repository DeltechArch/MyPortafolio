

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
    <p>27-Diciembre-2022</p>

    <p>Udemy</p>
    <p>21-Agosto-2023</p>
    
    <p>Ingles-Udemy</p>
    <p>10-Enero-2024</p>
    `;

    Educacion.appendChild(divEducacion);


}
mostrarEducacion();