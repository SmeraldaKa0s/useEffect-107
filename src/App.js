
import './App.css';
import { useState, useEffect } from 'react'; 
import Lista from "./components/Lista"; 

const App = () => {
  //se pueden usar 2 estados para pedir información distinta al mismo fetch
  const [episodios, setEpisodios] = useState([])
  const [info, setInfo] = useState({});
  const [data, setData] = useState ({}); 
  const [busqueda, setBusqueda] = useState (""); //poniendo string vacio me trae la busqueda general de los episodios, esta api me deja, otras se romperian 

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/episode?name=${busqueda}`)
    .then(res => res.json())
    .then((data) => {
      setEpisodios(data.results);
      setData(data);
    });
  },[busqueda])

  const handleChangeInput = e => setBusqueda(e.target.value);

  console.log("Se renderizó el componente App");
  return (
    <div>
      <div>
        <label>Busca un episodio de Rick and Morty</label>
        <input type="text" onChange={handleChangeInput} />
      </div>

      Cantidad de paginas: {data?.info?.pages}
      {episodios.map((episodio) => (
        <h2>{episodio.name}</h2>
      ))}

      <Lista/> 
    </div>
  );
}

export default App;
