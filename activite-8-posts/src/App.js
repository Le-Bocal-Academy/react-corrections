import { useState } from 'react';
//import du composant post
import Post from './Components/Post/Post';

function App() {
  //Création d'un tableau avec l'ensemble des posts
  const initialPostList = [
                            {idButton: 'post0', title: "My rocket", content: "Look, I built a new rocket", author: "Elon Musk", likes: 25},
                            {idButton: 'post1', title: "Le bocal Academy", content: "Aujourd'hui nous avons appris à coder les callbacks props!", author: "enseignante anonyme", likes: 0},
                            {idButton: 'post2', title: "Ouaou du CSS incroyable !", content: "Je vous avoue que je n'ai aucune idée de quoi écrire ici", author: "marie antoinette", likes: 50},
                          ];
  
  //Création d'une variable d'état dont la valeur initiale est le taleau de postes
  const [postList, setPostList] = useState(initialPostList);

  //Fonction qui sera utilisé comme fonction callback
  const addLikes = (id) => {
    postList[id].likes++;  //je rajoute un like à mon poste
    setPostList([...postList]); //Je préviens le DOM que la liste à changé
  };

  return (
    <div className="App">
      {
        //ici j'utilise l'index afin de l'envoyer à la fonction callback (pour que la fonction sache quelle poste la appelé)
        postList.map((post,index) => <Post title={post.title} author={post.author} content={post.content} likes={post.likes} addLikes={()=>addLikes(index)} />)
      }
    </div>
  );
}

export default App;
