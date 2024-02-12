//import du CSS pour l'aspect graphique
import "./ContenuPrincipal.css"
//import du composant article pour pouvoir s'en servir
import Article from "../Article/Article";

//composant contenu simple
function ContenuPrincipal () {
    return <>
        <section id="contenuPrincipal">
            <h1>Voici mes articles</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section id="articles">
            {/* ajour de 3 articles */}
            <Article/>
            <Article/>
            <Article/>
        </section>
    </>;
}
//export pour rendre le fichier disponible dans toute l'application
export default ContenuPrincipal;