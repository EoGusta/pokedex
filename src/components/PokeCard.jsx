import { Link } from 'react-router-dom'

function PokeCard({ id, name, type, imageUrl}) {
  return (
  <Link to={`/pokemon/${id}`}>
    <div className='pokecard'>
        <img src={imageUrl} alt={name}/>

      <h2>#{String(id).padStart(3, '0')} — {name}</h2>
      <p>    Tipo: {type}</p>
    </div>
  </Link>
  )
}

export default PokeCard
