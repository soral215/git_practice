import React from 'react';

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red'
        };
    }


    handleColor = () => {
        this.setState({
            color: 'blue'
        })
    }

    render() {
        return (
            <div ClassName="State">
                <h1 style={{ color: this.state.color }}>Class Component | State</h1>
                <button onClick={this.handleColor}>Click</button>
            </div>
        );
    }
}

export default State;