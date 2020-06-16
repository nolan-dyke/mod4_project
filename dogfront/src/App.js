import React, { Component } from 'react'
import './App.css'
import DogList from './DogList.js'
import PreferenceForm from './PreferenceForm'
const dogURL = 'http://localhost:3000/dogs'

export default class App extends Component {
  state = {
    dogs: []
  }

  componentDidMount() {
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

  render() {
    return (
      <div className='app'>
        <h1>Pup Matcher</h1>
        <div className='form-box'>
        <PreferenceForm filterDogs={this.filterDogs} />        
        </div>
        <DogList dogs={this.state.dogs}/>
      </div>
    )
  }
}

