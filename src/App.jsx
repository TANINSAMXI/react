import Header from "./components/Header.jsx";
import NavBar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContainer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NavBar />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
