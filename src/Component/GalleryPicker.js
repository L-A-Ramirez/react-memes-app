import React from 'react';
import '../style.css';
//import MemeCreate from './MemeCreate';
import { memeImages } from './memeImages';
import {Link, useNavigate} from 'react-router-dom';
import MemeCreate from './MemeCreate';


//import MemeCreate from './MemeCreate';

/*const [images, setImages] = React.useState([]);
    const {returnImages } = props;

    //Recibo las imagenes de la app a travez de "imagesRecived" el cual guarda en la lista "imageList" para luego pasarselas a images a travez de setImages
    React.useEffect(() => {
        let imageList = [];
        
        memeImages.forEach((el, i) => {
            imageList.push({ id: i, src: el.url, title: el.name })
        });
        setImages(imageList);
    }, []);

    //Muestros las imagenes recibidas a travez de "returnImages" pasandole todas las imagenes almacenadas en "images" 
    React.useEffect(() => {
        returnImages(images);
    }, [images])

    const onImageClick = id => {
        let imageList = [...images];
        for (const img of imageList) {
        if (img.id === id) {
          console.log(img.id);
          console.log(img.src);
        }
      }
    }*/



export const GalleryPicker = ({id}) => {

    const navigate = useNavigate();
    
    const crearMomaso = () => {
        navigate('/meme-create/'+id );
    }

    return (
        <div className='container'>
            <img onClick={crearMomaso} src={memeImages(`./${ id }.jpg`)} className={ "img"}></img>
        </div>
    )
}

export default GalleryPicker;