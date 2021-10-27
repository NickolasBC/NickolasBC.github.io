const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');


const buttonText = [
    'ugh.',
    'stop',
    'omg dad.',
    'seriously.',
    'please stop',
    'im done',
    'i cant even', 
    'fuck you',
];

async function fetchJoke() {
    // turn loader on 
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    // turn loader off 
    return data;
}

function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random()* arr.length)];
    if (item === not) {
        console.log('woops, we used that one');
        return randomItemFromArray(arr, not);
    }
    return item;
}

async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}

jokeButton.addEventListener('click', handleClick);
