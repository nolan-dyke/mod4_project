import React from 'react'
import DogCard from './DogCard.js'

export default function DogList({ dogs }) {
    const showDogs = dogs.map(dog => <DogCard key={dog.id} dog={dog}/>)

    return (
        <div className='dog-list'>
            {showDogs}
        </div>
    )
}
