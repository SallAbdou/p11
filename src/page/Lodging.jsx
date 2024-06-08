import { useParams } from 'react-router-dom'

const Lodging = () => {
  const { id } = useParams()

  return (
    <div>Logement {id} </div>
  )
}

export default Lodging
