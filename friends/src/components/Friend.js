import React from 'react';

function Friend({ details }) {
    if (!details) {
        return <h3>Working fetching the friend's details...</h3>
    }
    return (
        <div className='user'>
            <div className='userInfo'>
                <h2>{details.name}</h2>
                <p>Name: {details.name}</p>
                <p>Age: {details.age}</p>
                <p>Email: {details.email}</p>
            </div>
        </div>
    )
}

export default Friend;