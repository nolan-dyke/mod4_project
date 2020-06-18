import React, { Component } from 'react'
import './App.css'
import Login from './Login'
import CreateNewUser from './CreateNewUser'
import FavoritesList from './FavoritesList'
import PrivateRoute from './PrivateRoute'
import Hero from './Hero'
import {Route, Link} from 'react-router-dom'
const dogURL = 'http://localhost:3000/dogs'
const favoritesURL = 'http://localhost:3000/favorites'

export default class App extends Component {
  state = {
    dogs: [],
    favorites: [],
    user: {},
    login: true,
    favOn: false
  }

  componentDidMount() {
    this.getDogs()
    // this.getFavorites()
  }

  getDogs = () => {
    fetch(dogURL)
    .then(respone => respone.json())
    .then(dogs => {
      this.setState({ dogs })
    })
  }

  filterDogs = (preference) => {
    let dogsFiltered = this.state.dogs.filter(dog => dog.goodwithdogs === preference.goodwithdogs)
    let dogsFilteredCats = dogsFiltered.filter(dog => dog.goodwithcats === preference.goodwithcats)
    let dogsFilteredKids = dogsFilteredCats.filter(dog => dog.goodwithkids === preference.goodwithkids)
    let dogsFilteredEnergy = dogsFilteredKids.filter(dog => dog.energy === preference.energy)
    this.setState({dogs: dogsFilteredEnergy})
  }

  setUser = (user) => {
    this.setState({user})
  }

  changeLogin = () => {
    this.setState({login: !this.state.login})
  }

  getFavorites = () => {
    fetch(favoritesURL, {
      headers: {'content-type': 'application/JSON', 'Authorization': `Bearer ${localStorage.getItem('token')}`},
    })
    .then(resp => resp.json())
    .then(results => {
      let resultIds = results.message.map(result => result.dog_id)
      let favorites = this.state.dogs.filter(x => resultIds.filter(y => y === x.id).length)
      this.setState({favorites})
    })
  }

  addFavorite = (dog) => {
    if(!this.state.favorites.find(d => d === dog)){
      let newFavs = [...this.state.favorites, dog]
      this.setState({favorites: newFavs})
    }
  }

  changeFavs = () => {
    this.setState({favOn: !this.state.favOn})
  }

  render() {
    return (
      <div className='app'>
        <Hero />
        <div className='options'>
          {localStorage.token ? null : <button className='new-user-button' onClick={this.changeLogin} >{this.state.login ? 'New User?' : 'Login'}</button>}
          {localStorage.token ? <button onClick={this.changeFavs} >Favorites</button> : null}
        </div>
        <div className='form-box'>
          <Route path='/login' render={(props) => this.state.login ? <Login {...props} setUser={this.setUser} /> : <CreateNewUser setUser={this.setUser}/>}/>
        </div>
        <PrivateRoute exact path='/' dogs={this.state.dogs} addFavorite={this.addFavorite} filterDogs={this.filterDogs} />
        {this.state.favOn ? <FavoritesList dogs={this.state.favorites} /> : null}
      </div>
    )
  }
}

