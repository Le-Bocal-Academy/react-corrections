import {useState, useEffect } from 'react';
import Task from './Components/Task/Task';

function App() {
  const [tasksList, setTaskList] = useState([]);

  const addTask = () => {
    const newValue =  document.getElementById('tacheInput').value.trim();//Je récupère la valeur du texte auquel je retire tous les espaces sur les cotés

    if(!tasksList.includes(newValue) && newValue)// si la tache n'est pas déjà dans la liste et qu'il y a une tache dans l'input
      setTaskList([...tasksList, newValue]);//on ajoute la nouvelle tache à la liste

    document.getElementById('tacheInput').value = ""; //on réinitialise l'input 
  }

  const supprfct = (id) => {
    const textContent = tasksList[id]; //Je récupère la tache concernée par la modification
    setTaskList(tasksList.filter(task => return task !== textContent)); //on ajoute un élément dans la liste
  }

  const modiffct = (id) => {
    const textContent = tasksList[id]; //Je récupère la tache concernée par la supression
    document.getElementById('tacheInput').value = textContent;
    setTaskList(tasksList.filter(task => task !== textContent)); //on supprime un élément de la liste
  }

  return (
    <div className="App">
      <h1>TaskList</h1>
      <nav>
        <input id="tacheInput" />
        {/* quand on appuie sur ce bouton on appelle la fonction addTask */}
        <button onClick={addTask}>Ajouter</button>
      </nav>
      <section className='mesTaches'>
        <ul>
          {/* pour chaque taches de ma liste, je créé un composant Task avec ses 3 props : content, supprfct, et modiffct */}
          {tasksList.map((tache,index) => 
            <Task content={tache} supprfct={()=>{supprfct(index)}} modiffct={()=>{modiffct(index)}}/>
            )}
        </ul>
      </section>
    </div>
  );
}

export default App;
