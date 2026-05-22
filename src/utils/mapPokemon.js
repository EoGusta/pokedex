export function mapPokemonFromApi  (apiData) {
    const TYPE_LABELS = {
        grass: 'Grama',
        fire: 'Fogo',
        water: 'Água',
        bug: 'Inseto',
        normal: 'Normal',
        poison: 'Veneno',
        electric: 'Elétrico',
        ground: 'Terra',
        fairy: 'Fada',
        fighting: 'Lutador',
        psychic: 'Psíquico',
        rock: 'Pedra',
        ghost: 'Fantasma',
        ice: 'Gelo',
        dragon: 'Dragão',
        dark: 'Noturno',
        steel: 'Aço',
        flying: 'Voador',
        stellar: 'Estelar',
    }
    const capitalize = n => n.charAt(0).toUpperCase() + n.slice(1)

    const types = apiData.types.map(e => e.type.name)
    const type = types
        .map(t => TYPE_LABELS[t] || capitalize(t))
        .join('/')

    const imageUrl = apiData.sprites.other['official-artwork'].front_default

    return {
        id: apiData.id,
        name: capitalize(apiData.name),
        type,
        imageUrl,
        description: '', //preenchido depois em fetchPokemonById
    }
}

export function mapDescriptipionFromSpecies (speciesData) {
    const entry =
        speciesData.flavor_text_entries.find(e => e.language.name === 'pt') ??
        speciesData.flavor_text_entries.find(e => e.language.name === 'en')
    if (!entry) return ''
    return entry.flavor_text.replace(/\f|\n/g, ' ').trim()
}