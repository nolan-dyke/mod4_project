import React, { Component } from 'react'
const createUserURL = 'http://localhost:3000/users'

export default class CreateNewUser extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        passwordsSame: true
    }

    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.password !== this.state.confirmPassword){
            this.setState({passwordsSame: !this.state.passwordsSame})
        } else {
            let user = {username: this.state.username, password: this.state.password}
            fetch(createUserURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(user)
                })
            .then(resp => resp.json())
            .then(result => {
                this.props.setUser(result)
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' value={this.state.username} onChange={this.handleChange} /> 
                <label>Password</label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange} /> 
                <label>Confirm Password</label>
                <input type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} /> 
                <input type='submit' value='Create Profile' />
                <p className='error'>{this.state.passwordsSame ? null : 'Passwords do not match'}</p>
            </form>
        )
    }
}
