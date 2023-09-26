import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    // handleClick = () => {
    //     const { counter } = this.state;
    //     if (counter === 5) {
    //         throw new Error('I crashed!');
    //     }
    //     this.setState({ counter: counter + 1 });
    // };

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {
        if (this.state.counter > 5) {
            throw new Error("error");
        }
        return (
            <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        );
    }
}

export default BuggyCounter;