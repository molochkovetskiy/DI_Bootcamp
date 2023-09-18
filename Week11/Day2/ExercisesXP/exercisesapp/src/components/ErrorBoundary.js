import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log('error=>', error);
        console.log('info=>', info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>An error has occured.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;