/* eslint-disable multiline-ternary */
import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../component/Carousel'
import data from '../data/logements.json'
import Tags from '../component/Tags'
import Ratings from '../component/Ratings'
import Dropdown from '../component/Dropdown'

const Lodging = () => {
  const { id } = useParams()
  const lodging = data.find(l => l.id === id)

  // redirection si l'id n'est pas bon
  if (!lodging) {
    return <Navigate to="/not-found" />
  }

  return (
    <section id='lodging'>
      <Carousel data={lodging} />
      <div className="container">
        <div className="header">
          <div className="title">
            <h1>{lodging.title}</h1>
            <h2>{lodging.location}</h2>
            <Tags tags={lodging.tags} />
          </div>
          <div className="sub-header">
            <div className="host">
              <span>{lodging.host.name}</span>
              <img src={lodging.host.picture} alt={lodging.host.name} />
            </div>
            <Ratings rating={lodging.rating} />
          </div>
        </div>
        <div className="dropdowns">
          <Dropdown
            item={{ title: 'Description', description: lodging.description }}
          />
          <Dropdown
            item={{ title: 'Equipements', description: lodging.equipments }}
          />
        </div>
      </div>

    </section>
  )
}

export default Lodging
