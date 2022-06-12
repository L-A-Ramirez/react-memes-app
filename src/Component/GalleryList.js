import React from 'react';
import '../style.css';
//import MemeCreate from './MemeCreate';
import { memingo } from '../data/memingo';
import GalleryPicker from './GalleryPicker';
//import MemeCreate from './MemeCreate';

const GalleryList = () => {
    return (
        <div className='general'>
            <header className='encabezado'>
                <button><a href='/'>Inicio</a></button>
            </header>
            
            <div className='containerC'>
                <div>
                    {
                        memingo.map( meme => (
                            <GalleryPicker key={ meme.id } { ...meme }/>
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

export default GalleryList;