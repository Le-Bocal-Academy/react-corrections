import Article from "./Components/Article/Article";
import ContenuPrincipal from "./Components/ContenuPrincipal/ContenuPrincipal";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <ContenuPrincipal/>
      <Menu/>
      <section id="articles">
        <Article/>
        <Article/>
        <Article/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
