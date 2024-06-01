import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  const backgroundCardStyle = {
    backgroundImage: `url(${item.cover}), linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          )`
  }

  return (
    <Link
      to={`/lodging/${item.id}`}
      className="card"
      style={backgroundCardStyle}
    >
      <span>{item.title}</span>
    </Link>
  )
}

export default Card
