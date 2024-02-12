import "./Accueil.css";
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';

// Page d'accueil disponible lorsque l'on se rend sur le site
function Accueil () {
    return <section id="home">
    <Menu /> {/* Appel du header*/}
    <main>
        <section class="bienvenue">
            <h1>Bienvenue sur Notre Site</h1>
            <p>Découvrez nos services et produits incroyables.</p>
        </section>
    </main>
    <Footer />{/* Appel du footer*/}
    </section>;
}

export default Accueil;