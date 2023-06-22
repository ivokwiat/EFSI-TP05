import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [banderas,setBanderas] = useState([])
  const [randomFlag, setRandomFlag] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta,setRespuesta] = useState('');

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
  }, []);


  useEffect(()=>{
    if(banderas.length>0){      
      const randomNum = Math.floor(Math.random() * banderas.length);
      setRandomFlag(banderas[randomNum]);
    }
  },[banderas])


    const onChangeHandle = (e)=>{
      setRespuesta(e.target.value)
    }

    const buttonOnsubmitHandler = evento =>{
      
     console.log(randomFlag.name)
      //valido
      if(randomFlag.name == respuesta)
      {
         setPuntaje(puntaje + 10);


      }
      else{

        setPuntaje(puntaje - 1);

      }

    
  }  

  return (

    <div>

      {randomFlag ? (<img src={randomFlag.flag} alt="ejemplo" />) : (<div>Loading</div>)}

      
      <input  type="text" name="god" className="u-full-width" placeholder="Ingresa Bandera" value={respuesta} onChange={onChangeHandle}/>
      <button type="button" onClick={buttonOnsubmitHandler} className="u-full-width button-primary">Ta seguro?</button>
      <h1>puntaje: {puntaje}</h1>
    </div>
  );


  }
export default App;
  