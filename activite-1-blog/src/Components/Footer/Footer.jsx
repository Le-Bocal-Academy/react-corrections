//import du css pour un aspect graphique
import "./Footer.css";
//import d'un logo présent dans le même dossier
import logo from "./logo.png" ;

//composant footer simple
function Footer () {
    return <>
        <footer id="theFooter">
            <img src={logo} alt="oups" />
            <nav id="footerMenuLinks">
                <span>footer 1</span>
                <span>footer 2</span>
                <span>footer 3</span>
            </nav>
        </footer>
    </>;
}
//export pour rendre le fichier disponible dans toute l'application
export default Footer;