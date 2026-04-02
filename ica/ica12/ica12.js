const newQuoteBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');
const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let currentAnswer = '';
newQuoteBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', showAnswer);

function getQuote() {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            currentAnswer = data.answer;
            displayQuote(data.question);
        })
        .catch(error => {
            console.error('Error fetching trivia:', error);
            alert('Failed to fetch trivia. Please try again.');
        });
}

function displayQuote(quote) {
    document.querySelector('#js-quote-text').textContent = quote;
    document.querySelector('#js-answer-text').textContent = '';
}

function showAnswer() {
    document.querySelector('#js-answer-text').textContent = currentAnswer;
}

getQuote();
