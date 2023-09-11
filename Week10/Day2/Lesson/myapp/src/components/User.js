import './User.css';

const User = (props) => {
    const { info } = props;
    console.log('props=>', info);
    // const style = {
    //     display: 'inline-block',
    //     margin: '20px',
    //     border: '1px solid cyan',
    //     padding: '20px',
    //     textAlign: 'center'
    // };
    return (
        <div className='infoUser'>
            <img src={`https://robohash.org/${info.id}?size=150x150`} />
            <h2>{info.name}</h2>
            <p>{info.email}</p>
            <p>{info.username}</p>
        </div>
    );
};

export default User;