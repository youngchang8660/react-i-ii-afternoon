import React from 'react';

function Movies(props) {
    return (
        <div className='movie-css'>
            <ol>
                <li>{props.data.favoriteMovies[0]}</li>
                <li>{props.data.favoriteMovies[1]}</li>
                <li>{props.data.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default Movies