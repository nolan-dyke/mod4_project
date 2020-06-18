import React from 'react'
import DogList from './DogList'
import PreferenceForm from './PreferenceForm'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute(props) {
    const { dogs, addFavorite, filterDogs } = props

    return <Route render={(routerProps) => {
        return localStorage.token ? (
        <>
        <div className='form-box'>
            <PreferenceForm filterDogs={filterDogs} />        
          </div>
         <DogList {...routerProps} dogs={dogs} addFavorite={addFavorite} /> 
         </>
         )
         : <Redirect to='/login' />
    }} />
}
