import React from 'react';

function Name (props) {
    
    return (
        <div className='name'> {props.data.name.first} {props.data.name.last}</div>
        
    )
}

export default Name