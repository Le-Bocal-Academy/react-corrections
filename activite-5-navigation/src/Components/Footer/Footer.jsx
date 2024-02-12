import "./Footer.css";
import { Link } from "react-router-dom";

//création d'un footer réutilisable pour le mettre à la fin de toutes mes pages
function Footer () {
    return <>
        <footer id="theFooter">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="oups" />{/* lien vers l'image logo.png qui se trouve dans le dossier public */}
            <nav id="footerMenuLinks">
                 <Link to="/">Home</Link> {/* lien interne vers la page d'accueil */}
                <Link to="/login">Login</Link>{/* lien interne vers la page de login */}
                <Link to="/contact">Contact</Link>{/* lien interne vers la page de contact */}
            </nav>
        </footer>
    </>;
}
export default Footer;