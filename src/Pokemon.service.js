

export function getFirstAbility(pokemon) {
    if (pokemon.abilities.length === 0) 
        return null
    
    return pokemon.abilities[0].ability.name;
}

export function convertPoundsToKilograms(poundWeight) {
    if (poundWeight) {
        return poundWeight * 0.453592;
    }
    return null;
}