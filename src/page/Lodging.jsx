/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteCarousel from '../component/Carousel'
import data from '../data/logements.json'

const Lodging = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [lodging, setLodging] = useState(null)

  useEffect(() => {
    // Trouvee le logement correspondant à l'ID
    const foundLodging = data.find(l => l.id === id)
    setLodging(foundLodging)
    setLoading(false)
  }, [id])

  if (loading) {
    return <div>Chargement...</div>
  }

  return (
    <div>
      {lodging ? (
        <>
          <h1>{lodging.title}</h1>
          <InfiniteCarousel pictures={lodging.pictures} />
        </>
      ) : (
        <p>Logement non trouvé</p>
      )}
    </div>
  )
}

export default Lodging
