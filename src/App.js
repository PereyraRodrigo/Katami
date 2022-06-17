import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { NewCollection } from "./components/newcollection/Newcollection";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";

function App() {  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />           
        <Navbar />
        <ItemListContainer texto='ItemListContainer.js' />
        <NewCollection desc="Description text" />
      </header>
    </div>
  );
}

export default App;
