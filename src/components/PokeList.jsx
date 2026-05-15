import PokeCard from './PokeCard'
import { useState } from 'react'

const POKEMONS = [

  {
    id: 27,
    name: 'Sandshrew',
    type: 'Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
  },
  {
    id: 28,
    name: 'Sandslash',
    type: 'Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
  },
  {
    id: 529,
    name: 'Drilbur',
    type: 'Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
  },
  {
    id: 530,
    name: 'Excadrill',
    type: 'Ground/Steel',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
  },
  {
    id: 322,
    name: 'Numel',
    type: 'Fire/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
  },
  {
    id: 323,
    name: 'Camerupt',
    type: 'Fire/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
  },
  {
    id: 328,
    name: 'Trapinch',
    type: 'Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
  },
  {
    id: 329,
    name: 'Vibrava',
    type: 'Dragon/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
  },
  {
    id: 330,
    name: 'Flygon',
    type: 'Ground/Dragon',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
  },
  {
    id:849,
    name: 'Toxtricity',
    type: 'Electric/Poison',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',

  },
  {
    id: 918,
    name: 'Spidops',
    type: 'Bug',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png',
  },
  {
    id: 194,
    name: 'Paldean Wooper',
    type: 'Poison/Water',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
  },
  {
    id:980,
    name: 'Clodsire',
    type: 'Poison/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png',
  }
];

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
