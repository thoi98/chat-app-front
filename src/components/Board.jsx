import React, { Component } from 'react';

//import Square from './Square'

import Inc from './increment'
import Dec from './decrement'
class Board extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        };
    }



    render() {
        return (
            <div>
                {this.state.count}
                <Inc onClick={()=>{this.setState({count:this.state.count+1});}}/>
                <Dec onClick={()=>{this.setState({count:this.state.count-1});}}/>
            </div>
        );
    }
}

export default Board;