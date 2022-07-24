import "./App.css";
import "./scss/app.scss"
import { Navbar } from "./components/navbar/Navbar";
import { NewCollection } from "./components/newcollection/Newcollection";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { useState } from "react";
import { ItemCount } from "./components/itemcount/ItemCount";

const tarea = new Promise((resuelto, rechazado) => {  
  setTimeout(() => { 
    resuelto([{id:'2',name:'Jacket',price:'750'},{id:'1',name:'Hoodie',price:'500'}])
  }, 2000)
  //setTimeout simula asincronismo/delay de .fetch de api
});

tarea.then(
  resultado => {
    console.log(resultado);
  }, error => {
    console.log('error ' + error);
  }
)


function App() {
  //const name = 'Agustin //NUNCA HACER ESTO
  const [nombre, setNombre] = useState('Rodrigo') //esto SI

  const click = () => {
    setNombre('Alex')
  }

  return (
    <div className="App">
      <header className="App-header">        
        <Navbar />
        <p onClick={click}>CLICK ME TO CHANGE NAME</p>
        <p onClick={() => { setNombre('Rodrigo') }}>CLICK ME TO CHANGE NAME AGAIN</p>
        <ItemListContainer nombre={nombre} />
        <ItemCount stock="5" initial={1} />
        <ItemCount stock="3" initial={1} />
        <NewCollection desc="Non used ATM" />
      </header>
    </div>
  );
}

export default App;
