// Fetch a random emoji and options from the server
async function fetchRandomEmoji() {
    try {
        const response = await fetch('http://127.0.0.1:5000/random-emoji');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display the fetched emoji and options
async function displayEmojiAndOptions() {
    const emojiContainer = document.getElementById('emoji-container');
    const feedback = document.getElementById('feedback');
    emojiContainer.innerHTML = '';
    feedback.textContent = '';

    const { emoji, correctName, options } = await fetchRandomEmoji();

    emojiContainer.innerHTML = `
      <p>${emoji}</p>
      <ul>
        ${options.map(option => `<li>${option}</li>`).join('')}
      </ul>
    `;

    const guessForm = document.getElementById('guess-form');
    guessForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const guessInput = document.getElementById('guess');
        const playerGuess = guessInput.value;

        if (playerGuess == correctName) {
            feedback.textContent = 'Correct!';
        } else {
            feedback.textContent = 'Incorrect. Try again!';
        }
    });
}

// Initial display when the page loads
displayEmojiAndOptions();
