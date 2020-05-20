import React from 'react';

export default function FriendsForm(props) {
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return (
        <form className='form'>
            <h1>New Friend Form</h1>

            {/* TEXT INPUTS */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                >
                </input>
            </label>
            <label>Age:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.age}
                    onChange={onInputChange}
                    name='age'
                    type='number'
                >
                </input>
            </label>
            <label>Email:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                >
                </input>
            </label>
            <button onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}