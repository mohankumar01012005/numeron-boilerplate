// Iteration 5: Store the player score and display it on the game over screen

var playagain = document.getElementById('play-again-button')

playagain.addEventListener('click', function (){
    location.href = './game.html'
})

var scoreBoard = document.getElementById('score-board')

let score = localStorage.getItem('Score')

scoreBoard.textContent = score