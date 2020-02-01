import React from 'react';

const JumpPage = ({ jump }) => {

    const pageNum = [];

    for(let x=0; x <= 48; x++) {
        pageNum.push(x);
    }

    return(
        <div id="dropdown">
            
            <select onChange={jump}>
                {pageNum.map((page, index) => <option key={index} value={index}>{page+1}</option>)}
            </select>
            <p>Jump to Page</p>
        </div>
    )
}

export default JumpPage;