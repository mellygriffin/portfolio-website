import './Art.css';
import { Gallery } from 'react-grid-gallery';
import { Link } from 'react-router-dom';

const Art = () => {

    return (
        <>
        <div className="artwork">
        <h2>Digital Illustrations</h2>
        <div className="gallery">
            <Gallery />
        </div>
        <p></p>
        <h2>Sequential Art</h2>
        <div className="gallery">
        <img></img>
        <img></img>
        <img></img>
        </div>
        </div>
        <Link to="https://www.npmjs.com/package/react-grid-gallery" > React Grid Gallery (c) Ben Howell </Link> 
        </>
    )
}

export default Art;