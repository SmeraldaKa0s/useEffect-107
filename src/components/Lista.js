import { useState } from "react";

const Lista = () => {
  const [lista, setLista] = useState([
    {
      id: 1,
      nombre: "uno",
    },
    {
      id: 2,
      nombre: "dos",
    },
    {
      id: 3,
      nombre: "tres",
    },
  ]);

  const handleClick = () => {
    const listaAlReves = lista.slice().reverse();
    setLista(listaAlReves);
  };

  return (
    <div>
      <button onClick={handleClick}>Cambiar el orden de la lista</button>
      {lista.map((elemento, index) => (
        <div key={index}>
          <h1>Mi nombre es {elemento.nombre}</h1>
          <h2>Mi id es {elemento.id}</h2>
          <h3>Mi indice es {index} </h3>
        </div>
      ))}
    </div>
  );
};

export default Lista;