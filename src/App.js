import './App.css';
import GuardarComponente from './components/GuardarComponente';
import { PrimerComponente } from './components/PrimerComponente';

function App() {
  return (
    <div className="App">
      <h1>CONTROL 2 TEL-335</h1>
      <PrimerComponente/>
      <GuardarComponente diccionario={{
            "ip": "161.185.160.93",
            "city": "New York City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS22252 The City of New York",
            "postal": "10004",
            "timezone": "America/New_York",
            "readme": "https://ipinfo.io/missingauth"
          }}/>
    </div>
  );
}

export default App;
