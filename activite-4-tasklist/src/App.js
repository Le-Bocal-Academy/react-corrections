import {useState } from 'react';
import Task from './Components/Task/Task';
import { useEffect } from 'react';

function App() {
  const [tasksList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(tasksList);
  },[tasksList])

  const addTask = () => {
    const newValue =  document.getElementById('tacheInput').value.trim();

    if(!tasksList.includes(newValue) && newValue)
      setTaskList([...tasksList,newValue]);

    document.getElementById('tacheInput').value = "";
  }

  const supprfct = (id) => {
    const textContent = tasksList[id];
    console.log(textContent);
    setTaskList(tasksList.filter(task => {console.log(task);return task !== textContent}));
  }
  const modiffct = (id) => {
    const textContent = tasksList[id]
    document.getElementById('tacheInput').value = textContent;
    setTaskList(tasksList.filter(task => task !== textContent));
  }

  return (
    <div className="App">
      <h1>TaskList</h1>
      <nav>
        <input id="tacheInput" />
        <button onClick={addTask}>Ajouter</button>
      </nav>
      <section className='mesTaches'>
        <ul>
          {tasksList.map((tache,index) => <Task id={index} content={tache} supprfct={supprfct} modiffct={modiffct}/>)}
        </ul>
      </section>
    </div>
  );
}

export default App;
