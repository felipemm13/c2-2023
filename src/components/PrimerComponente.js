
import React, {useState} from 'react'
import '../App.css';

export const PrimerComponente = () => {
    

    const [texto, setTexto] = useState('');
    
    const [apiValida, setApiValida] = useState(false);
  const [mostrarIP, setMostrarIP] = useState('');
  const [mostrarDiccionario, setMostrarDiccionario] = useState(null);
  const posicionGeografica =[40.7143,-74.0060]


    const handleChange = (event) => {
        setTexto(event.target.value);
      };
      const esFormatoIPv4Valido = (texto) => {
        const patronIPv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
        return patronIPv4.test(texto);
      };
      
      const handleClick = () => {
        if (esFormatoIPv4Valido(texto)) {
          setApiValida(true);
          setMostrarDiccionario({
            "ip": "161.185.160.93",
            "city": "New York City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS22252 The City of New York",
            "postal": "10004",
            "timezone": "America/New_York",
            "readme": "https://ipinfo.io/missingauth"
          });
        } else {
          setApiValida(false);
          setMostrarIP('');
        }
      };

  
  return (
    <div>
        <h1>Ingrese Ip a Geolocalizar</h1>
        <input type="text" value={texto} onChange={handleChange} />
      {esFormatoIPv4Valido(texto) ? (
        <button onClick={handleClick}>Enviar</button>
      ) : (
        <button disabled>Enviar</button>
      )}
      
      {!esFormatoIPv4Valido(texto) && <p className="rojo">Botón no activado</p>}
      {apiValida && <p>¡La API es válida!</p>}
      {mostrarDiccionario && (
        <ul>
          {Object.keys(mostrarDiccionario).map((clave) => (
            <li key={clave}>
              {clave}: {mostrarDiccionario[clave]}
            </li>
          ))}
        </ul>
      )}

    </div>
    
    
    
  )
}
