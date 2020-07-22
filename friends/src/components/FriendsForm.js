import React from 'react';

export default function FriendsForm(props) {
    const {
        values,
        onChange,
        onSubmit
    } = props

    return (
        <form className='form'>
            <h1>New Friend Form</h1>

            {/* TEXT INPUTS */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                >
                </input>
            </label>
            <label>Age:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.age}
                    onChange={onChange}
                    name='age'
                    type='number'
                >
                </input>
            </label>
            <label>Email:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                >
                </input>
            </label>
            <button onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}