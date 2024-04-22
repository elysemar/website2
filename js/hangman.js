const wordEl = document.getElementById('word')
wrongLettersEl = document.getElementById('wrong-letters')
const plaAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard]

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = words[selectedIndex]

const correctLetters = ['a', 'p']
const wrongLetter = []

// Show hidden word
function displayWord() {
    wordEl.innerHTML =  `
        ${selectedWord
            .split('')
            .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
            ` ).join('')
            }
    `
}

displayWord()