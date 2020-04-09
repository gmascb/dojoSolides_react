import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [lista, setLista] = useState([])
  const [value, setValue] = useState("")

  useEffect( () => {
    console.log("Variavel lista mudou !!!", lista);
  }, [lista]);

  useEffect( () => {
    console.log("Variavel value mudou !!!", value);
  }, [value]);

  return (
    <div className="App">
      <div className = "">
        <div style={{display: "flex", flexDirection: "row"}}>
          
          <input onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}/>
          
          {value}
          <button onClick={ () => {
            setLista([... lista, value])
            setValue("");
            }}> Adicionar
          </button>

        </div>
      </div>

      <Listagem lista={lista}/>
    </div>
  );
}



const Listagem = ( {lista}) => {
  return lista.map(e => <p> {e} </p>)
}


export default App;
