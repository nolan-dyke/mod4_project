import React from 'react'
import DogCard from './DogCard.js'

export default function DogList({ dogs, addFavorite }) {
    const showDogs = dogs.map(dog => <DogCard key={dog.id} dog={dog} addFavorite={addFavorite}/>)

    return (
        <div className='dog-list'>
            {showDogs}
        </div>
    )
}
