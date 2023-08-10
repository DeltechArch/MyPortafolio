window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#Perfil')) {
        sectionEducacion.classList.add("inactive");
        sectionPerfil.classList.remove("inactive");
        TituloPrincipal.classList.add("inactive");
        
    } else if (location.hash.startsWith('#Educacion')) {
        sectionPerfil.classList.add("inactive");
        sectionEducacion.classList.remove("inactive");
        TituloPrincipal.classList.add("inactive");

    } else {
        sectionPerfil.classList.add("inactive");
        sectionEducacion.classList.add("inactive");
        TituloPrincipal.classList.remove("inactive");
    }



}