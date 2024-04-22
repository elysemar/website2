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

const correctLetters = []
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

    const innerWord = wordEl.innerText.replace(/\n/g, '')

    if(innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!'
        popup.style.display = 'flex'
    }
}


// Update the wrong letters
function updateTheWrongLetters () {
    console.log('Update Wrong')
}

// Show Notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}

}
// Keydown letter press
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keyCode <=90) {
            const letter = e.key

            if(selectedWord.includes(letter)) {
                if( !correctLetter.includes(letter)) {
                    correctLetters.push(letter)

                    displayWord()
                } else {
                    showNotification()
                } else {
                    if (!wrongLetters.includes(letter)) {
                        wrongLetters.push(letter)

                        updateWrongLettersEl()
                    } else {
                        showNotification()
                    }
                }
                }
            }
    }
})


