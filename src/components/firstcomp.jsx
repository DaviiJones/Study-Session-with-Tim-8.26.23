
import React from 'react';

const Firstcomp = (props) => {

    return (
        <div>
            <h1>{props.count}</h1>
            <h2>{props.number}</h2>
            <button onClick={() => props.handleClick() }>change state</button>
            <button onClick={() => props.inform() }>inform</button>
        </div>
    );
}

export default Firstcomp;

