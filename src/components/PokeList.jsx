import PokeCard from './PokeCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemons'

function PokeList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
  p.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section>
      <label htmlFor='busca'>Buscar Pokémon: </label>
      {listaFiltrada.length === 0 ? (<label>Nenhum Pokémon encontrado para esta busca</label>) : (<label> Mostrando {listaFiltrada.length} Pokémon(s)</label>) }
        <input
          id='busca'
          type='search'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder ='Digite o nome do Pokémon' />
      <div className ='pokemon-grid'>
        {listaFiltrada.map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl} />
      ))}
       </div>
    </section>
  )
}

export default PokeList
