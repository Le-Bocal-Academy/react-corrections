import React, { useReducer } from 'react';

function reducer(compteur, action) { //fonction reducer de notre variable d'état
  let multiplier = 1;
  if (action.zone === "anneau extérieur") {
    multiplier = 2;
  } else if (action.zone === "anneau intérieur") {
    multiplier = 3;
  }

  let pointsEarned = action.points;
  if (action.zone === "Bull's eye") {
    pointsEarned = 50;
  } else if (action.zone === "anneau central") {
    pointsEarned = 25;
  } 
  
  //Calcul du nombre de points
  const newTotalPoints = compteur.totalPoints - pointsEarned * multiplier;

  //La nouvelle valeur de la variable d'état est set ici
  if (newTotalPoints <= 0) {
    alert('Vous avez gagné !');
    return 501; 
  } else {
    return newTotalPoints ;
  }
}

function App() {
  const [compteur, setCompteur] = useReducer(reducer, 501 ); //ici on créé une vairable d'état utilisant un réducer

  return (
    <div className="App">
      <div className="counter">
        <h1>Compteur de points aux fléchettes</h1>
        <p>Points restants : {compteur.totalPoints}</p>
        {/* A ce niveau on place tous les boutons que l'on relie à notre variable d'état */}
        <button onClick={() => setCompteur({points:20, zone:"simple"})}>Lancer 20 points</button>
        <button onClick={() => setCompteur({points:20, zone:"anneau extérieur"})}>Lancer 20 points (anneau extérieur)</button>
        <button onClick={() => setCompteur({points:20, zone:"anneau intérieur"})}>Lancer 20 points (anneau intérieur)</button>
        <button onClick={() => setCompteur({points:0,  zone:"Bull's eye"})}>Bull's eye</button>
        <button onClick={() => setCompteur({points:0,  zone:"anneau central"})}>Anneau central</button>
      </div>
    </div>
  );
}

export default App;
