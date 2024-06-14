import React, { useState } from 'react'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

const InfiniteCarousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigateCarousel = (sens) => {
    if (sens === -1 && currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else if (sens === 1 && currentIndex === (pictures.length - 1)) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + sens)
    }
  }

  // Fonction pour gérer la navigation au clavier
  /*   const handleKeyDown = (event) => {
    if (event.keyCode === 37) { // Flèche gauche
      navigateCarousel(-1)
    } else if (event.keyCode === 39) { // Flèche droite
      navigateCarousel(1)
    }
  } */

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={() => navigateCarousel(-1)}>
        <img src={arrowLeft} alt="Précédent" />
      </button>
      <div className="carousel-slide">
        <img
          src={pictures[currentIndex]}
          alt={`Logement ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-button next" onClick={() => navigateCarousel(1)}>
        <img src={arrowRight} alt="Suivant" />
      </button>
    </div>
  )
}

export default InfiniteCarousel
