import React, { Component } from 'react'
const loginURL = 'http://localhost:3000/login'

export default class Login extends Component {
    state ={
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(result => {
            this.props.setUser(result.user)
            localStorage.setItem('token', result.token)
            
        })
    }

    render() {
        const { username, password } = this.state
        return (
            <form className='login-form' onSubmit={this.handleSubmit} >
                <label>Username</label>
                <input type='text' name='username' value={username} onChange={this.handleChange} />
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={this.handleChange} />
                <input type='submit' value='login' />
            </form>
        )
    }
}
