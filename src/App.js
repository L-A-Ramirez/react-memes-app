import { Switch , Route, Router, Routes, BrowserRouter } from "react-router-dom";
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import MemeCreate from './Component/MemeCreate';
import GalleryList from "./Component/GalleryList";

/*const IMG1 = '/img/1.jpg';
const IMG2 = '/img/2.jpg';
const IMG3 = '/img/3.jpg';
const IMG4 = '/img/4.jpg';
const IMG5 = '/img/5.jpg';
const IMG6 = '/img/6.jpg';
const IMG7 = '/img/7.jpg';
const IMG8 = '/img/8.jpg';
const IMG9 = '/img/9.jpg';
const IMG10 = '/img/10.jpg';
const IMG11 = '/img/11.jpg';
const IMG12 = '/img/12.jpg';
const IMG13 = '/img/13.jpg';

const getImages = images => {
  console.log(images)
}

const imageList = [
  { 
    url: IMG1, name: "imagen 1" 
  },
  { 
    url: IMG2, name: "imagen 2" 
  },
  { 
    url: IMG3, name: "imagen 3" 
  },
  { 
    url: IMG4, name: "imagen 4" 
  },
  { 
    url: IMG5, name: "imagen 5" 
  },
  { 
    url: IMG6, name: "imagen 6" 
  },
  { 
    url: IMG7, name: "imagen 7" 
  },
  { 
    url: IMG8, name: "imagen 8" 
  },
  { 
    url: IMG9, name: "imagen 9" 
  },
  { 
    url: IMG10, name: "imagen 10" 
  },
  { 
    url: IMG11, name: "imagen 11" 
  },
  { 
    url: IMG12, name: "imagen 12" 
  },
  { 
    url: IMG13, name: "imagen 13" 
  }
];*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GalleryList/>}/>
        <Route exact path="/meme-create/:id" element={<MemeCreate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
