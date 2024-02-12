import {useState } from 'react';

function App() {
  // variable d'état concernant le chiffre qui viens juste d'être tiré
  const [tirage, setTirage] = useState(0);
  // variable d'état concernant le nombre max qui peut être tiré (entre 0 et 90 sinon)
  const [max, setMax] = useState(90);
  // Variable d'état concernant l'ensemble des chiffres qui viennent d'être tirés
  const [historiqueTirage, setHistoriqueTirage] = useState([]);

  //fonction qui se lance lorsque l'on appuie sur le bouton afin de faire un tirage
  const faireTirage = () => {
    let chiffreTire = -1; //on le met avant le while pour que la valeur soit disponible même après le while
    
    do {
      if(historiqueTirage.length >= max) //si tous les chiffres ont étés tirés
        return;//on arrête de tirer au sort

      //on tire un chiffre au hasard entre 0 et le nombre max défini par l'utilisateur
      chiffreTire = Math.floor(Math.random() * max) 

    } while(historiqueTirage.length !== max && historiqueTirage.includes(chiffreTire)); //tant que l'historique comprend le chiffre tiré et que la longueur n'est pas égale à max

    setTirage(chiffreTire);//on dis que le chiffre tiré est le chiffre que l'on viens de tirer
    setHistoriqueTirage([...historiqueTirage, chiffreTire]);//on modifie l'historique de tirage pour y ajouter la nouvelle valeur
  }

  //fonction pour réinitialiser le chiffre tiré et l'historique
  const reinit = () => {
    setTirage(0);
    setHistoriqueTirage([]);
  }

  return (
    <div className="App">
      <h1>Tirage au sort</h1>
      <div>Nombre max : <input type='number' onChange={(e) => {setMax( e.target.value);reinit()}}/></div>
      <div className='roulette'>
        <img src={process.env.PUBLIC_URL + '/roulette.png'} alt='oups'/>
        <span className='resultat'> {tirage} </span>
      </div>
      <div className='buttons'>
        {/* bouton pour tirer au sort  */}
        <button onClick={faireTirage}>Tirer au sort</button>
        {/* bouton pour réinitialiser le jeu */}
        <button onClick={reinit}>réinitialiser</button>
      </div>
      {/* on affiche l'historique  */}
      <div>chiffres déjà tirés : {historiqueTirage.toString()} </div>
    </div>
  );
}

export default App;
