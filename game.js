function inside(){
  localStorage.setItem("score",score)  //for upadating the score to local storage
  clearInterval(interval);   // for clearing old interval and for strating new interval
  start_interval()   //strat new timer
}




var num1 =Math.floor(Math.random()*100);
var num2 = Math.floor(Math.random()*100);

let num1_box = document.getElementById("number1"); //to show random numbers in box
let num2_box = document.getElementById("number2");


num1_box.textContent = num1


let score = 0;

let greater_than = document.getElementById("greater-than")
let equal_to = document.getElementById("equal-to")
let lesser_than = document.getElementById("lesser-than")

greater_than.onclick = () => {
if(num1 > num2){
  score++;

  num1=Math.floor(Math.random()*100);
  num2=Math.floor(Math.random()*100);

  num1_box.textContent=num1
  num2_box.textContent=num2

  console.log(score);
  inside()

}else{
window.open("./gameover.html","_self")
}
}

lesser_than.onclick = () =>{
if(num1 < num2){
score++;

  num1=Math.floor(Math.random()*100);
  num2=Math.floor(Math.random()*100);

  
  num1_box.textContent=num1
  num2_box.textContent=num2

  console.log(score)
  inside()

}else{
window.open("./gameover.html","_self")
}

generateRandomNumber(); //for generating next set of  random numbers
}

equal_to.onclick = () =>{
if(num1==num2){
score++;

  num1=Math.floor(Math.random()*100);
  num2=Math.floor(Math.random()*100);

  
  num1_box.textContent=num1
  num2_box.textContent=num2

  console.log(score)
  inside()

}else{
window.open("./gameover.html","_self")
}
}

let time = 5

let timer = document.getElementById('timer')
timer.textContent = time
let interval
function start_interval(){
time = 5
interval = setInterval(()=>{
    time--;
    timer.textContent = time

    if (time==0){
        clearInterval(interval)
        location.href = './gameover.html'
    }

},1000)

}

start_interval()