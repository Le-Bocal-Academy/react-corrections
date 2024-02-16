import {useState } from 'react';
import WikiLink from './Components/WikiLink/WikiLink';

function App() {
  const [results, setResult] = useState([]);

  const rechercher = async () => {
    // je récupère la valeure entrée par l'utilisateur et je retire les espaces des cotés à l'aide de trim()
    const recherche = document.getElementById('recherche').value.trim();

    //Je ne fais rien s'il n'y a rien dans la barre de recherche
    if (!recherche) return;

    //cette fonction permet de transformer notre string en argument valide en retirant les caractères qui ne passent pas
    const recherchePropre = encodeURIComponent(recherche);
  
    //J'envoie ma requête API
    let response = await fetch("https://fr.wikipedia.org/w/api.php?action=opensearch&search=" + recherchePropre + "&format=json&origin=*");
    let donnees = await response.json();

    //Mise en forme des données pour avoir un beau tableau
    setResult(donnees[1].map((item, index) => {return {"name" : item, "link" : donnees[3][index]}}));

    //Réinitialisation de l'input
    document.getElementById('recherche').value = "";
  };
  

  return (
    <div className="App">
      <input type='text' id="recherche"/>
      <button onClick={rechercher}>rechercher</button>
      <section>{results.map(result => <WikiLink name={result.name} link={result.link}/>)}</section>
    </div>
  );
}

export default App;
