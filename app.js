// Iteration 1: Make the Play button functional.

// Description: When the Play button is clicked the game page should be displayed.
let Play_btn = document.getElementById("play-button");
console.log(Play_btn);
Play_btn.addEventListener("click", redirect);
function redirect(){
  location.href='./game.html'
}