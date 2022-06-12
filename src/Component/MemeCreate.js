/* eslint-disable jsx-a11y/alt-text */
import {useState, React, useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import html2canvas from 'html2canvas';
import '../style.css';
import '../App.css'
import { memeImages } from './memeImages';
import {getMemeById} from './getMemeById'
//import MemeCreate from './MemeCreate';

export const MemeCreate = () => {

  //Variable = linea1 
  //Funcion = setLinea1 (Permite modificar el valor de la variable)
  const[linea1, setLinea1] = useState("");
  const[linea2, setLinea2] = useState("");
  const {id} = useParams();

  /*const handleReturn = () => {
    if( history.length <=2 ) {
        history.push('/');
    } else {
        history.goBack();
    }
  }*/

  const onChangeLinea1 = (evento) => {
    setLinea1(evento.currentTarget.value);
  }

  const onChangeLinea2 = (evento) => {
    setLinea2(evento.currentTarget.value);
  }
  
  const onClickExportar = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'el meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className='containerC'>
      <div className='encabezado'>
              <button className='botonEN'><a href='/'>Inicio</a></button> 
      </div>

      <div className="App">
        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br/>
        <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br/>
        
        <button onClick={onClickExportar}>Exportar</button>
        
        <div className='meme' id="meme">
          <span a>{linea1}</span><br/>
          <span b>{linea2}</span>
          
          <div>
            <img src={memeImages(`./${ id }.jpg`)}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MemeCreate;