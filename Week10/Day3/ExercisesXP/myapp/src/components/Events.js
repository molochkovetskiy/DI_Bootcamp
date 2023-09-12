import { useState } from 'react';

const clickMe = () => {
    alert('I was clicked');
};

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        alert(`The ${event.key} key was pressed, your input is: ${event.target.value}`)
    }
};

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState('ON');

    const changeValue = () => {
        setIsToggleOn('OFF');
    };

    return (
        <>
            <button onClick={clickMe}>Click on me</button>
            <input onKeyDown={handleKeyDown}></input>
            <div>Exercise 9:
                <button onClick={changeValue}>{isToggleOn}</button>
            </div>
        </>
    );
};

export default Events;