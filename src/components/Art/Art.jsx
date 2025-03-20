import './Art.css';
import Gallery from '../Gallery/Gallery.jsx';
import images from '../Gallery/Gallery.jsx';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Art = () => {
    
     return (

        <>
        <div className="artwork">
        <h2 className="illustrations">Digital Illustrations</h2>
        <div className="gallery">
            <Gallery images={images}/>
        </div>
        <p></p>
        <h2>Sequential Art</h2>
        <div className="gallery">
        <img></img>
        <img></img>
        <img></img>
        </div>
        </div>
        </>
    )
}

export default Art;