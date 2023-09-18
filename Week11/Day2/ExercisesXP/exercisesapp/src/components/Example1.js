import { Component } from 'react';

class Example1 extends Component {
    render() {
        const data = require('../data.json');

        return (
            <div>
                <ul>
                    {data.SocialMedias.map((link, index) => (
                        <li key={index}>
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Example1;