import React, { useState, Component } from 'react';

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

    postFriend = () => {
        axiosWithAuth
            .post('/api/friends')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    onInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        // setFormValues({
        //     ...formValues,
        //     [name]: value
        // })

        this.state.formValues = {
            ...this.state.formValues,
            [name]: value
        }
    };

    onSubmit = e => {
        e.preventDefault();

        // setFormValues({
        //     ...formValues,
        //     id: (formValues.id + 1)
        // })

        this.state.formValues = {
            ...this.state.formValues,
            id: (this.state.formValues.id + 1)
        }

        const newFriend = {
            id: this.state.formValues.id,
            name: this.state.formValues.name,
            age: this.state.formValues.age,
            email: this.state.formValues.email
        }

        this.postFriend(newFriend);
        this.state.formValues = initalFormValues;
    };
        render() {
            return (
                <div className='container'>
                    <Form
                        values={this.state.formValues}
                        onInputChange={this.onInputChange}
                        onSubmit={this.onSubmit}
                    />
                    <h1>Hello</h1>
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