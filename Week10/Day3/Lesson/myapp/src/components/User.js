import React from 'react';
import './User.css';


class User extends React.Component {
    render() {
        const { info } = this.props;
        return (
            <div className='infoUser'>
                <img src={`https://robohash.org/${info.id}?size=150x150`} />
                <h2>{info.name}</h2>
                <p>{info.email}</p>
                <p>{info.username}</p>
            </div>
        );
    }
}

// const User = (props) => {
//     const { info } = props;
//     return (
//         <div className='infoUser'>
//             <img src={`https://robohash.org/${info.id}?size=150x150`} />
//             <h2>{info.name}</h2>
//             <p>{info.email}</p>
//             <p>{info.username}</p>
//         </div>
//     );
// };

export default User;