import React from 'react'

export default function DogCard({ dog, addFavorite }) {
    return (
        <div className='dog-card' onClick={() => addFavorite(dog)} >
            <img src={dog.image}/>
            <p>{dog.name}, {dog.age}</p>
            <a href={dog.external_link} target='_blank'>Adopt Page</a>
        </div>
    )
}
