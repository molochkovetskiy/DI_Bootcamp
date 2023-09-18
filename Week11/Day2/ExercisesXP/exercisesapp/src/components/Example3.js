import { Component } from 'react';

class Example3 extends Component {
    render() {
        const data = require('../data.json');

        return (
            <>
                {data.Experiences.map((company, companyIndex) => (
                    <div key={companyIndex}>
                        <img src={`${company.logo}`} />
                        <br />
                        <a href={company.url}>{company.companyName}</a>
                        <br />
                        <br />
                        {company.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                                <h6>{role.title}</h6>
                                <p>{role.startDate}{role.location}</p>
                                <p>{role.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </>
        );
    }
}

export default Example3