
import './App.css';
import { useState, useEffect } from 'react'; 

const App = () => {
  const [episodios, setEpisodios] = useState([])
  const [paginas, setPaginas] = useState(0);
  //se pueden usar 2 estados para pedir información distinta al mismo fetch

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/episode/")
    .then(res => res.json())
    .then((data) => {
      setEpisodios(data.results)
      setPaginas(data.info.pages);
    });
  },[])

  console.log(episodios);
  return (
    <div>
      Cantidad de paginas: {paginas}
      {episodios.map((episodio) => (
        <h2>{episodio.name}</h2>
      ))}
    </div>
  );
}

export default App;
