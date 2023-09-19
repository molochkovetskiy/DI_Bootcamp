import { useRef, useState } from "react";

const CharacterCounter = () => {
    const [count, setCount] = useState(0)
    const inputRef = useRef(null);

    const handleInputChange = () => {
        const textLength = inputRef.current.value.length;
        setCount(textLength);
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Type something..."></textarea>
            <p>Character Count: {count}</p>
        </div>
    );
};

export default CharacterCounter;