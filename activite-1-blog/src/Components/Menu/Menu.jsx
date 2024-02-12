//import du CSS pour un aspect graphique
import "./Menu.css";
//import d'un logo présent dans le même dossier
import logo from "./logo.png" ;

//composant Menu simple
function Menu () {
    return <>
        <nav id="menuNav">
            <span id="menuLinks">
                <span>menu1</span>
                <span>menu2</span>
                <span>menu3</span>
            </span>
            <img src={logo} alt="oups" />
        </nav>
    </>;
}
//export pour rendre le fichier disponible dans toute l'application
export default Menu;