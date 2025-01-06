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
   return (
      <div>
         {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
         ))}
      </div>
   );
};

export default Gallery;