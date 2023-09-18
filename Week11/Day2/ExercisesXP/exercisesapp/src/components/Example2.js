import { Component } from 'react';

class Example2 extends Component {
    render() {
        const data = require('../data.json');

        return (
            <>
                {data.Skills.map((skillArea, skillIndex) => (
                    <div key={skillIndex}>
                        <h3>{skillArea.Area}</h3>
                        <ul>
                            {skillArea.SkillSet.map((skill, skillSetIndex) => (
                                <li key={skillSetIndex}>
                                    <p>{skill.Name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    }
}

export default Example2;