import React, { createContext, useState, useEffect } from 'react'

export const PokeContext = createContext()

export default ({ children }) => {
    const [pokemonList, setPokemonList] = useState([])
  
    useEffect(() => {
       fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then((res) => {
          return res.json().then((data) => data)
          }).then((data) => {
            const { pokemon } = data
            setPokemonList(pokemon)
          })
    }, [])

    return(
        <PokeContext.Provider value={{pokemonList}}>
            {children}
        </PokeContext.Provider>
    )
}