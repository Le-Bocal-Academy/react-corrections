//import des différents composants que je souhaite utiliser pour pouvoir m'en servir dans ma page
import Article from "./Components/Article/Article";
import ContenuPrincipal from "./Components/ContenuPrincipal/ContenuPrincipal";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";

// composant app qui comporte tout le code de ma page
function App() {
  return (
    <div className="App">
      <ContenuPrincipal/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
