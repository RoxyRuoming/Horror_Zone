import '../css/Carousel.css';
import { useState } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function previous() {
        // const previousIndex = (currentIndex + images.length - 1) % images.length;
        // setCurrentIndex(previousIndex);
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }

    function next() {
        // const nextIndex = (currentIndex + 1) % images.length;
        // setCurrentIndex(nextIndex)
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }

    return (
        <div className="carousel">
            <button aria-label="a button to show the previous image" onClick={previous}>Prev</button>
            {/* <img className="carousel-pic" src={images[currentIndex]} alt="horror scene" /> */}
            <div className="carousel-wrapper">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-pic ${index === currentIndex ? 'active' : ''}`} >
                        <img className="carousel-image" src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button aria-label="a button to show the next image" onClick={next}>Next</button>
        </div>
    );
}

export default Carousel;