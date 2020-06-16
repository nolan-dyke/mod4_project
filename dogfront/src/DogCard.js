import React from 'react'

export default function DogCard({ dog }) {
    return (
        <div className='dog-card'>
            <img src={dog.image}/>
            <p>{dog.name}, {dog.age}</p>
            <a href={dog.external_link}>Adopt Page</a>
        </div>
    )
}