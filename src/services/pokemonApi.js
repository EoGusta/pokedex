import { mapPokemonFromApi, mapDescriptipionFromSpecies } from '../utils/mapPokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

async function parseResponse (res, msg) {
    if(!res.ok) throw new Error(msg)
    return res.json()

}

export async function fetchPokemonList (limit = 650) {
    const listRes = await fetch(`${BASE_URL}/pokemon?limit=${limit}`)
    const listData = await parseResponse(
        listRes, 'Erro ao buscar lista de pokémons'
    )
    return Promise.all(
        listData.results.map(async item => {
            const detRes = await fetch(item.url)
            const detData = await parseResponse(
                detRes, `Erro ao buscar detalhes do pokémon ${item.name}`
            )
            return mapPokemonFromApi(detData)
        })
    )
}

export async function fetchPokemonById (id) {

    const res = await fetch(`${BASE_URL}/pokemon/${id}`)
    if (res.status === 404) return null
    const data = await parseResponse(res, 'Não foi possível carregar.')
    const pokemon = mapPokemonFromApi(data)

    const speciesRes = await fetch(data.species.url)
    if (speciesRes.ok) {
        const speciesData = await speciesRes.json()
        pokemon.description = mapDescriptipionFromSpecies(speciesData)
    }

return pokemon
}


