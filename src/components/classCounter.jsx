import React, { Component } from 'react';

class classCounter extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        };
    }

    increment(){
        this.setState({count:this.state.count+1});
    }

    componentDidMount()
    {
        document.title= `click:${this.state.count}`;
    }

    componentDidUpdate()
    {
        document.title= `click:${this.state.count}`;
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.increment();}}>Counter:{this.state.count}</button>
            </div>
        );
    }
}

export default classCounter;