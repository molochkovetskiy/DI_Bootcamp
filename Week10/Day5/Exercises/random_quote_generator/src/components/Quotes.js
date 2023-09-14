import React, { useState, useEffect } from 'react';
import quotesData from "../QuotesDatabase";
import './Quotes.css';

const Quotes = (props) => {
    const [usedQuotes, setUsedQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState('');
    const { randomColor, getNewColor } = props;

    const getRandomQuote = () => {
        // Filter out quotes that have already been used
        const availableQuotes = quotesData.filter(quote => !usedQuotes.includes(quote));

        if (availableQuotes.length === 0) {
            // Reset usedQuotes if all quotes have been displayed
            setUsedQuotes([]);
        }

        const randomIndex = Math.floor(Math.random() * availableQuotes.length);
        const newQuote = availableQuotes[randomIndex];

        // Update usedQuotes to include the new quote
        setUsedQuotes([...usedQuotes, newQuote]);

        return newQuote;
    };

    useEffect(() => {
        const initialQuote = getRandomQuote();
        setCurrentQuote(initialQuote);
    }, []);

    const handleNewQuoteClick = () => {
        const newQuote = getRandomQuote();
        setCurrentQuote(newQuote);
        getNewColor();
    };

    return (
        <div id='wrapper' style={{ backgroundColor: randomColor }}>
            <div id='quote' style={{ color: randomColor }}>
                <h1>"{currentQuote.quote}"</h1>
                <h5 id='author'>-{currentQuote.author ? currentQuote.author : 'Unknown'}-</h5>
                <button id='quoteButton'
                    onClick={handleNewQuoteClick}
                    style={{ backgroundColor: randomColor }}
                >
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default Quotes;