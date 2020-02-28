import React from 'react';

function City (props) {
    return (
        <div className='city-country'><span>From: </span> {props.data.city} {props.data.country}</div>
    )
}

export default City