import React, { useState } from 'react';

const images = [
   {
      src: '/assets/images/gallery/eyes-swordtember-2021.png',
      alt: 'Swordtember'
   },
   {
      src: '/assets/images/gallery/eyes-swordtember-2021.png',
      alt: 'Another'
   },
];

const Gallery = () => {

   const [enlargedIndex, setEnlargedIndex] = useState(null);

   const handleClick = (index) => {
      setEnlargedIndex(enlargedIndex === index ? null : index);
   };

   return (
      <div>
         {images.map((image, index) => (
            <img 
            key={index} 
            src={image.src} 
            alt={image.alt}
            onClick={() => handleClick(index)}
            style={{
               width: enlargedIndex === index ? '500px' : '200px', 
               height: enlargedIndex === index ? '500px' : '200px',
               curser: 'pointer',
               transition: 'all 0.3s ease-in-out',
            }}
            />
         ))}
      </div>
   );
};

export default Gallery;