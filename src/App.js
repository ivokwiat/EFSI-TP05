import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [banderas, setBanderas] = useState([])
  const [randomFlag, setRandomFlag] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState('');

  const RandomFlagsGenerated = ()=>{
      const randomNum = Math.floor(Math.random() * banderas.length);
      setRandomFlag(banderas[randomNum]);
  }


  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
        setBanderas(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlags();
  },[]);


  useEffect(() => {
    if (banderas.length > 0) {
      RandomFlagsGenerated()
    }
  }, [banderas])


  const onChangeHandle = (e) => {
    setRespuesta(e.target.value)
  }

  const buttonOnsubmitHandler = evento => {

    console.log(randomFlag.name)
    //valido
    if (randomFlag.name.toLowerCase() === respuesta.toLowerCase()) {
      setPuntaje(puntaje + 10);
    } else {
      setPuntaje(puntaje - 1);
    }

    RandomFlagsGenerated()

  }

  return (


    <div className="fondo" >

      {randomFlag ? (
        <div className="flag-container">
          <img className="flag" src={randomFlag.flag} alt="ejemplo" />
        </div>
      ) : (<div>Loading</div>)}

      <div className="container">
        <input type="text" name="god" className="u-full-width" placeholder="Ingresa Bandera" value={respuesta} onChange={onChangeHandle} />
        <button type="button" onClick={buttonOnsubmitHandler} className="u-full-width button-primary">Ta seguro?</button>
        <h1 className='puntaje'>Puntaje: {puntaje}</h1>
      </div>
    </div>
  );



}
export default App;
