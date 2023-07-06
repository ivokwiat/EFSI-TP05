import { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from './components/Flag';
import Form from './components/Form';
import Puntaje from './components/Puntaje';

function App() {
  const [banderas, setBanderas] = useState([]);
  const [randomFlag, setRandomFlag] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState('');

  const RandomFlagsGenerated = () => {
    const randomNum = Math.floor(Math.random() * banderas.length);
    setRandomFlag(banderas[randomNum]);
  };

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get(
          'https://countriesnow.space/api/v0.1/countries/flag/images'
        );
        setBanderas(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlags();
  }, []);

  useEffect(() => {
    if (banderas.length > 0) {
      RandomFlagsGenerated();
    }
  }, [banderas]);

  const onChangeHandle = (e) => {
    setRespuesta(e.target.value);
  };

  const buttonOnsubmitHandler = (evento) => {
    console.log(randomFlag.name);
    // valido
    if (randomFlag.name.toLowerCase() === respuesta.toLowerCase()) {
      setPuntaje(puntaje + 10);
    } else {
      setPuntaje(puntaje - 1);
    }

    RandomFlagsGenerated();
  };

  return (
    <div className="app">
      <div className="fondo">
        {randomFlag ? (
          <Flag randomFlag={randomFlag} />
        ) : (
          <div>Loading</div>
        )}

        <div className="containerGeneral">
          <Form
            respuesta={respuesta}
            onChangeHandle={onChangeHandle}
            buttonOnsubmitHandler={buttonOnsubmitHandler}
          />

          <Puntaje puntaje={puntaje} />
        </div>
      </div>
    </div>
  );
}

export default App;
