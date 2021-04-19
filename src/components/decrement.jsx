import React, { Component } from 'react';

//used in Board

function decrement(props){
        return (
            <div>
                <button onClick={()=>props.onClick()}>Decrement</button>   
            </div>
        );
}

//used in Board

export default decrement;