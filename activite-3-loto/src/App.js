import {useState, useReducer } from 'react';

function App() {
  const historiqueReducer = (state, action) => {
    switch (action) {
      case "reinitialise":
        return []
      case "add":
        if(!state.includes(tirage)){
          state.push(tirage);
          state.sort();
        }
        return state;
      default:
        throw new Error();
    }
  }

  const [tirage, setTirage] = useState(0);
  const [max, setMax] = useState(90);
  const [historiqueTirage, setHistoriqueTirage] = useReducer (historiqueReducer,[]);

  const faireTirage = () => {
    let chiffreTire = 0;
    do {
      if(historiqueTirage.length >= max) console.log("tous les chiffres ont été tirés");

      chiffreTire = Math.floor(Math.random() * max)

      if (historiqueTirage.includes(chiffreTire)) console.log("Chiffre déjà tiré");
    } while(historiqueTirage.length !== max && historiqueTirage.includes(chiffreTire));

    setTirage(chiffreTire);
    setHistoriqueTirage("add");
  }

  const reinit = () => {
    setTirage(0);
    setHistoriqueTirage("reinitialise");
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
        <button onClick={faireTirage}>Tirer au sort</button>
        <button onClick={reinit}>réinitialiser</button>
      </div>
      <div>chiffres déjà tirés : {historiqueTirage.map(el => <>{el}, </>)} </div>
    </div>
  );
}

export default App;
