import React, { useState } from 'react';

const images = [
   {
      src: '/assets/images/gallery/mermay-love-sigJPG.jpg',
      alt: 'Image of a shark-themed merman giving an affectionate gift of a jellyfish to a ribbon eel-themed mermaid.',
   },
   {
      src: '/assets/images/gallery/eyes-swordtember-2021.png',
      alt: 'Another',
   },
   {
      src: '/assets/images/gallery/dnd-group-chibi.png',
      alt: 'Another',
   },
   {
      src: '/assets/images/gallery/Marax.png',
      alt: 'Swordtember',
   },
   {
      src: '/assets/images/gallery/Okami_Amaterasu.jpg',
      alt: 'Another',
   },
   {
      src: '/assets/images/gallery/dnd-forest-walk.png',
      alt: 'Another',
   },
];

const Gallery = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);

   const openModal = (image) => {
      setSelectedImage(image);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedImage(null);
   };

   return (
      <>
         <div className="gallery">
            {images.map((image, index) => (
               <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image)}
                  style={{
                     width: '150px',
                     height: '200px',
                     cursor: 'pointer',
                     transition: 'transform 0.3s ease',
                     transform: 'scale(1)',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
               />
            ))}
         </div>

         {/* Modal */}
         {isModalOpen && (
            <div
               className="modal-overlay"
               style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
               }}
               onClick={closeModal}
            >
               <div
                  className="modal-content"
                  style={{
                     backgroundColor: 'white',
                     padding: '5px',
                     borderRadius: '10px',
                     maxWidth: '80%',
                     maxHeight: '80%',
                     textAlign: 'center',
                  }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <img
                     src={selectedImage.src}
                     alt={selectedImage.alt}
                     style={{
                        width: '90%',
                        height: 'auto',
                        maxWidth: '100vw',
                        maxHeight: '70vh',
                        borderRadius: '8px',
                        objectFit: 'contain',
                     }}
                  />
                  <button
                     onClick={closeModal}
                     style={{
                        position:'absolute',
                        top: '20px',
                        right: '20px',
                        marginTop: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                     }}
                  >
                     Close
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Gallery;
