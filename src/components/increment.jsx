import React from 'react';
//used in Board
function increment(props){
    return (
        <div>
            <button onClick={()=>props.onClick()}>Increment</button>
        </div>
    );
}

export default increment;