import React from 'react'
import data from '../data/logements.json'

const Home = () => {
  return (
    <main>
      <header className="home">
        <img src="./logo.png" alt="Logo"/>
        <ul className="header-link">
          <li>Accueil</li>
          <li>À propos</li>
        </ul>
      </header>

      <section>
        <div className="image-container">
          <img src="./header-img.png" alt="Chez vous, partout et ailleurs" />
          <span className="centered-text">Chez vous, partout et ailleurs</span>
        </div>
      </section>

      <section className='logement-section'>
        {data.map((logement) => (
        <div key={logement.id} className="logement image-background" style={{ backgroundImage: `url(${logement.cover})` }}>
            <h2>{logement.title}</h2>
        </div>
        ))}
      </section>
    </main>
  )
}

export default Home
