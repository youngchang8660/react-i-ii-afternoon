import React from 'react';

function Job (props) {
    return (
        <div class='job-css'><span>Job Title: </span>{props.data.title}</div>
    )
}

export default Job