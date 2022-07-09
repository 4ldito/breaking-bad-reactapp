import React from 'react'
import Character from '../components/Character'

export const renderCharacters = (characters) => {
    return (
        characters.map(character => {
            return (
                <Character
                    id={character.char_id}
                    name={character.name}
                    img={character.img}
                    portrayed={character.portrayed}
                    key={character.char_id}
                />)

        })
    )
}
