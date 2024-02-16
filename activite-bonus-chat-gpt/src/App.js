const API_KEY = '';
const URL = 'https://api.openai.com/v1/chat/completions';

function App() {

  async function chatGpt () {
    // Les données que tu souhaites envoyer
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": document.getElementById('prompt').value
        }
      ]
    };

    // Créer et envoyer la requête
    let response = await fetch(URL, { method: 'POST', 
                                      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}`},
                                      body: JSON.stringify(data)});

    let donnees = await response.json();  
    let message = donnees?.choices[0]?.message?.content;

    console.log(message);
  
    //réinitialisation du prompt
    document.getElementById('prompt').value = "";
  }

  return (
    <div className="App">
      <input id="prompt"/>
      <button onClick={chatGpt}>Demander à chat GPT</button>
    </div>
  );
}

export default App;
