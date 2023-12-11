import Accueil from "./components/accueil/Accueil";
import Apropos from "./pages/A_propos/Apropos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accueil />
        <Apropos />
      </header>
    </div>
  );
}

export default App;
