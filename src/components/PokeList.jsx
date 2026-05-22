import PokeCard from './PokeCard'
import { useEffect, useState } from 'react'
import { fetchPokemonList } from '../services/pokemonApi'

function PokeList() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
  p.name.toLowerCase().includes(filtro.toLowerCase())
  );

  useEffect(() => {
    let cancelled = false

    async function loadPokemons() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchPokemonList(650)
        if (!cancelled) setPokemons(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro desconhecido')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

  loadPokemons()
  return () => {
    cancelled = true }
}, [])

  return (
    <section>
      <label htmlFor='busca'>Buscar Pokémon: </label>
      <input
          id='busca'
          type='search'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder ='Digite o nome do Pokémon' />
      {loading && <p>Carregando Pokémon...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && listaFiltrada.length === 0 && (
        <p>Nenhum Pokémon encontrado.</p>)}
      {!loading && !error && listaFiltrada.length > 0 && (
        <div className ='pokemon-grid'>
          {listaFiltrada.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl} />
          ))}
       </div>      )}
    </section>
  )

}

export default PokeList
