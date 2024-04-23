// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

var play = document.getElementById('play-button')

console.log(play)

play.addEventListener('click',function (){
    window.open("./game.html","_self")
})