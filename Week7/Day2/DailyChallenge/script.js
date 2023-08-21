const libForm = document.getElementById('libform');
const storySpan = document.getElementById('story');

const stories = [
    "Once upon a time, there was a {{adjective}} {{noun}} named {{person}}. They loved to {{verb}} in {{place}}.",
    "{{person}} found a mysterious {{noun}} and decided to {{verb}} with it in the {{adjective}} {{place}}.",
    "In a {{place}} far away, {{person}} discovered a {{adjective}} {{noun}} and started {{verb}} all around.",
    "There lived a {{noun}} who was known for their {{adjective}} nature. One day, they met {{person}} and they {{verb}} together in {{place}}."
];

function generateStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}

function replacePlaceholders(story, values) {
    return story.replace('{{noun}}', values.noun)
        .replace('{{adjective}}', values.adjective)
        .replace('{{person}}', values.person)
        .replace('{{verb}}', values.verb)
        .replace('{{place}}', values.place);
}

libForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const values = {
        noun: document.getElementById('noun').value,
        adjective: document.getElementById('adjective').value,
        person: document.getElementById('person').value,
        verb: document.getElementById('verb').value,
        place: document.getElementById('place').value
    };

    if (Object.values(values).some(value => value.trim() === '')) {
        alert('Please fill in all the values!');
        return;
    }

    const randomStory = generateStory();
    const storyText = replacePlaceholders(randomStory, values);
    storySpan.textContent = storyText;
});