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

