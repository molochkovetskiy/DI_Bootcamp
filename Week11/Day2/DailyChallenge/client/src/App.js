import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      helloMessage: '',
      inputValue: '',
      serverResponse: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      if (response.ok) {
        const helloMessage = await response.json();
        this.setState({ helloMessage });
      } else {
        console.log('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });

      if (response.ok) {
        const responseData = await response.json();
        this.setState({ serverResponse: responseData, inputValue: '' });
        console.log('Response from server:', responseData);
      } else {
        console.log('Error sending POST request:', response.statusText);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <>
        <h1>{this.state.helloMessage}</h1>
        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button type='submit'>Submit</button>
        </form>
        {this.state.serverResponse}
      </>
    );
  }
}

export default App;