import React, { useReducer } from 'react';

// Création du reducer afin de gérer le compteur
function reducer(state, action) {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'DOUBLE':
      return state * 2;
    case 'POWER':
      return state * state;
    case 'HALF':
      return state / 2;
    case 'RANDOM':
      return Math.floor(Math.random() * 100);
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

function App() {
  // création d'une variable d'état gérée par reducer
  const [count, setCount] = useReducer(reducer, 0);

  return (
    <div className="App">
      <div className="counter">
        <h2>Compteur: {count}</h2> {/* affichage du compte */}
        {/* utilisation du reducer a chaque fois que l'on clique sur un bouton  */}
        <button onClick={() => setCount('INCREMENT')}>Incrémenter</button>
        <button onClick={() => setCount('DECREMENT')}>Décrémenter</button>
        <button onClick={() => setCount('DOUBLE')}>Doubler</button>
        <button onClick={() => setCount('POWER' )}>Puissance</button>
        <button onClick={() => setCount('HALF' )}>Diviser par deux</button>
        <button onClick={() => setCount('RANDOM')}>Aléatoire</button>
        <button onClick={() => setCount('RESET' )}>Reset</button>
      </div>
    </div>
  );
}

export default App;
