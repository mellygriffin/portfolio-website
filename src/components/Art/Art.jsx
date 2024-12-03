import './Art.css';
import { Gallery } from 'react-grid-gallery';

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
        </>
    )
}

export default Art;