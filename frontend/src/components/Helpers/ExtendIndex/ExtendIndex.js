import React from 'react';
import './ExtendIndex.css'


const ExtendIndex = ({extendHandler}) => {
    return (
        <>
        <div id='extendIndexContainer'>
            <button className="button" onClick={extendHandler}>See More Reviews</button>
        </div>
        
        </>
    )
}

export default ExtendIndex;