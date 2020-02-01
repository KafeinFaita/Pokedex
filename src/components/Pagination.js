import React from 'react';

const Pagination = ({ next, prev }) => {
    return (
        <div id="buttons">
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
        
    )
}

export default Pagination;