import { NavLink } from 'react-router-dom'

function PokeNav() {
  return (
    <nav className='pokenav'>
      <div>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/pokemon">Pokémon</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </div>
    </nav>
  )
}

export default PokeNav
