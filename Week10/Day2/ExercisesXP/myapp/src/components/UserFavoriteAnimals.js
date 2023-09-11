const UserFavotiteAnimals = (props) => {
    const { animals } = props;
    return (
        <ul>
            {animals.map((animal, idx) => {
                return <li key={idx}>{animal}</li>
            })}
        </ul>
    );
};

export default UserFavotiteAnimals;