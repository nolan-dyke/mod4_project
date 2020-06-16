import React, { Component } from 'react'

export default class PreferenceForm extends Component {
    state = {
        goodwithdogs: false,
        goodwithkids: false,
        goodwithcats: false,
        energy: 1
    }

    
    handleDogTick = () => {
        this.setState({goodwithdogs: !this.state.goodwithdogs})
    }
    
    handleCatTick = () => {
        this.setState({goodwithcats: !this.state.goodwithcats})
    }

    handleKidTick = () => {
        this.setState({goodwithkids: !this.state.goodwithkids})
    }

    updateEnergy = (event) => {
        let int = parseInt(event.target.value, 10)
        this.setState({energy: int})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let submission = this.state
        this.props.filterDogs(submission)
    }

    render() {
        const { goodwithdogs, goodwithcats, goodwithkids} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>What sort of dog are you looking for?</h3>
                    <label htmlFor='dog-tick'>Needs to be good with other dogs?</label>
                    <input id='dog-tick' type='checkbox' name='goodwithdogs' value={goodwithdogs} onChange={this.handleDogTick} />
                    <label htmlFor='cat-tick'>Needs to be good with cats?</label>
                    <input id='cat-tick' type='checkbox' name='goodwithcats' value={goodwithcats} onChange={this.handleCatTick} />
                    <label htmlFor='kid-tick'>Needs to be good with small children?</label>
                    <input id='kid-tick' type='checkbox' name='goodwithkids' value={goodwithkids} onChange={this.handleKidTick} />
                    <label htmlFor='energy'> Activity Level</label>
                    <select name='energy' onChange={this.updateEnergy}>
                        <option value='1' >Low</option>
                        <option value='2' >Medium</option>
                        <option value='3' >High</option>
                    </select>
                    <input type='submit'value='Filter' />
                </form>
            </div>
        )
    }
}
