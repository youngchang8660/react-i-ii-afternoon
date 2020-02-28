import React from 'react';

function Employer (props) {
    return (
        <div className='employer-css'><span>Employer: </span>{props.data.employer}</div>
    )
}

export default Employer