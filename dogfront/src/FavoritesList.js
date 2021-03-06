import React from 'react'
import DogCard from './DogCard.js'

export default function FavoritesList({ dogs }) {
    const showDogs = dogs.map(dog => <DogCard key={dog.id} dog={dog}/>)

    return (
        <div className='dog-list'>
            <h1>Favorites</h1>
            {showDogs}
        </div>
    )
}