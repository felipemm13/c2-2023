import React, { useState } from 'react';
import axios from 'axios';

const GuardarComponente = ({ diccionario }) => {
  const [guardadoExitoso, setGuardadoExitoso] = useState();

  const handleClick = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        diccionario
      );
      console.log(response.data); // Imprimir la respuesta del servicio en la consola
      setGuardadoExitoso(true);
    } catch (error) {
      console.error(error);
      setGuardadoExitoso(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Guardar</button>
      {guardadoExitoso && <p>Guardado</p>}
      {!guardadoExitoso && <p></p>}
    </div>
  );
};

export default GuardarComponente;
