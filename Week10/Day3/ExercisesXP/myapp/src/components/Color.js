import { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setfavoriteColor] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
        setfavoriteColor('yellow');
    }, []);

    const changeColor = () => {
        setfavoriteColor('blue');
    }

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default Color;