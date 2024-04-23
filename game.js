// Iteration 2: Generate 2 random number and display it on the screen

var num1,num2;

var num1_box = document.getElementById('number1')
var num2_box = document.getElementById('number2')

function generatenums(){
    num1 = Math.floor(Math.random()*100)
    num2 = Math.floor(Math.random()*100)
    
    num1_box.innerHTML = num1
    num2_box.innerHTML = num2
}


// Iteration 3: Make the options button functional
let score = 0

var greater = document.getElementById('greater-than')
var equal = document.getElementById('equal-to')
var lesser = document.getElementById('lesser-than')

console.log(greater.clicked)

generatenums()

greater.addEventListener('click',function (){
    if (num1>num2){
        score+=1
        generatenums()
        clearInterval(interval)
        start_interval()
        localStorage.setItem('Score', score)
    }
    else{
        window.open('./gameover.html')
    }
})
equal.addEventListener('click',function (){
    if (num1==num2){
        score+=1
        generatenums()
        clearInterval(interval)
        start_interval()
        localStorage.setItem('Score', score)
    }
    else{
        window.open('./gameover.html')
    }
})
lesser.addEventListener('click',function (){
    if (num1<num2){
        score+=1
        generatenums()
        clearInterval(interval)
        start_interval()
        localStorage.setItem('Score', score)
    }
    else{
        window.open('./gameover.html')
    }
})
    


// Iteration 4: Build a timer for the game

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

localStorage.setItem('Score', score)
