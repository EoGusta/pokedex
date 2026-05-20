export const POKEMONS = [

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
    id: 258,
    name: 'Mudkip',
    type: 'Water',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
  },
  {
    id: 259,
    name: 'Marshtomp',
    type: 'Water/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
  },
  {
    id: 260,
    name: 'Swampert',
    type: 'Water/Ground',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
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

export function getPokemonById(id) {
  const numericId = Number(id)
  return POKEMONS.find((p) => p.id === numericId) ?? null
}

export function getPokemonByName(name) {
    const lowerName = name.toLowerCase()
    return POKEMONS.find((p) => p.name.toLowerCase() === lowerName) ?? null
}