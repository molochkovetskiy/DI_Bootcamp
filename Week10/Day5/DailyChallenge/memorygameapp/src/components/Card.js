const Card = ({ cardData, onCardClick }) => {
    const { id, clicked, name, image, occupation } = cardData;
    const cardClass = clicked ? 'card clicked' : 'card';

    return (
        <div className={cardClass} onClick={() => onCardClick(id)}>
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <h3 className="card-name">Name: {name}</h3>
                <p className="card-occupation">Occupation: {occupation}</p>
            </div>
        </div>
    );
};

export default Card;