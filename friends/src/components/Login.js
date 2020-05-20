import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isLoading: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        this.setState({isLoading: true});
        e.preventDefault();

        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                this.setState({ isLoading: false });
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => {
                this.setState({ isLoading: false });
                console.log(err);
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                    {this.state.isLoading && 
                        <div id='loading'>
                            <img id='loading-image' src='../images/ajax-loader.gif' alt='Loading...' />
                        </div>}
                </form>
            </div>
        );
    }
}

export default Login;