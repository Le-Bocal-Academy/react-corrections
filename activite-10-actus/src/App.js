import {useState} from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  const clefApi = '50deb25fbabb48af81ac99d398d16f5e';
  const link = 'https://newsapi.org/v2/everything?q=Apple&from=2024-02-14&sortBy=popularity&apiKey=' + clefApi;
  
  async function look_for_Actuality () {
    //J'envoie ma requête API
    let response = await fetch(link);
    let donnees = await response.json();
    
    //Si je n'ai pas d'article je n'affiche rien
    if(!donnees.articles) return;

    //Je formate les articles et je met à jours ma variable d'état
    setArticles(donnees.articles.map(article => {return{
                                                    title: article.title + " by " + article.author,
                                                    content: article.content,
                                                    image : article.urlToImage,
                                                    url: article.url}}));
  }

  //J'appelle la fonction asynchrone que je viens de créer
  look_for_Actuality();

  return (
    <div className="App">
      <h1>Mon blog perso</h1>
      {/* map pour afficher les articles que l'on a récupéré */}
      {articles.map(article => <div className='Article'>
        <h2>{article.title}</h2>
        <img className='articleImage' src={article.image} alt='oups'/>
        <div className='articleContent'>{article.content}</div>
        <button onClick={() => window.open(article.url, '_blank')}>En savoir plus</button>
      </div>)}
    </div>
  );
}
 
export default App;
