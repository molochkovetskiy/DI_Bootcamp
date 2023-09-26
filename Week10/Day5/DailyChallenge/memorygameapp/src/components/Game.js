import './Game.css';

import React, { useState, useEffect } from 'react';
import Card from './Card';

const Game = ({ cardsData }) => {
    const [cards, setCards] = useState(cardsData);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    // Shuffle the cards when the game starts or the user clicks on a card
    useEffect(() => {
        shuffleCards();
    }, [score]);

    const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
    };

    const handleCardClick = (cardId) => {
        if (clickedCards.includes(cardId)) {
            // User clicked on the same card again
            setScore(0);
            setClickedCards([]);
        } else {
            // User clicked on a new card
            setScore(score + 1);
            setClickedCards([...clickedCards, cardId]);

            if (score >= topScore) {
                setTopScore(score + 1);
            }
        }
    };

    return (
        <div className="game-container">
            <header id="game-header">
                <h1 id="game-name">Heroes Memory Game</h1>
                <h3 id="description">Get points by clicking on an image but don't click on any more than once!</h3>
                <div>
                    <h4 id="score">Score: {score}</h4>
                    <h4 id="top-score">Top-score: {topScore}</h4>
                </div>
            </header>
          
            <div className="card-container">
                {cards.map((card) => (
                    <Card key={card.id} cardData={card} onCardClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
};

export default Game;
