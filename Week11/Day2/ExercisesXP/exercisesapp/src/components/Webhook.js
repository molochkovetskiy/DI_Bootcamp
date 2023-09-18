import { Component } from 'react';

class Webhook extends Component {
    constructor() {
        super();
        this.state = {
            responseData: null,
        };
    }

    fetchData = async () => {
        try {
            const webhookURL = 'https://webhook.site/09d279e4-44b8-46a8-8c48-ed14b3e51b67';
            const dataToSend = {
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27,
            };

            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                try {
                    const responseData = await response.json();
                    this.setState({ responseData });
                    console.log('Response from webhook:', responseData);
                } catch (jsonError) {
                    console.log('Error parsing JSON data:', jsonError);
                }
            } else {
                console.log('Error fetching data from webhook:', response.statusText);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.fetchData}>Press me to post some data</button>
            </div>
        );
    }
}

export default Webhook;