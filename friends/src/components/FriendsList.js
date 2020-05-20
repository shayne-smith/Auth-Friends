import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import Form from './FriendsForm';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initalFormValues = {
    id: 1,
    name: '',
    age: '',
    email: ''
}

class FriendsList extends Component {
    state = {
        friends: [],
        formValues: initalFormValues
    }

    componentDidMount() {
        this.getData();
    }

    postFriend = (newFriend) => {
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
                this.setState({
                    friends: [
                        ...this.state.friends,
                        newFriend
                    ]
                })
            })
            .catch(err => console.log(err))
    };

    getData = () => {

        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    }

    onInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value)

        this.setState({
            formValues: {
                ...this.state.formValues,
                [name]: value
            }
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const newFriend = {
            id: uuid(),
            name: this.state.formValues.name,
            age: this.state.formValues.age,
            email: this.state.formValues.email
        }

        this.postFriend(newFriend);
        this.setState({
            formValues: initalFormValues
        })
    };
        render() {
            return (
                <div className='container'>
                    <Form
                        values={this.state.formValues}
                        onChange={this.onInputChange}
                        onSubmit={this.onSubmit}
                    />
                    <div className='friendsContainer'>
                        {
                            this.state.friends.map(friend => {
                                return (
                                    <Friend key={friend.id} details={friend} />
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
};

export default FriendsList;