import "./Menu.css";
import { Link } from "react-router-dom";

//Menu réutilisable afin de permettre d'avoir un header commun sur toutes les pages
function Menu () {
    return <>
        <nav id="menuNav">
            <span id="menuLinks">
                <Link to="/">Home</Link>{/* lien interne vers la page d'accueil */}
                <Link to="/login">Login</Link>{/* lien interne vers la page de login */}
                <Link to="/contact">Contact</Link>{/* lien interne vers la page de contact */}
            </span>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="oups" />{/* lien vers l'image logo.png qui se trouve dans le dossier public */}
        </nav>
    </>;
}
export default Menu;