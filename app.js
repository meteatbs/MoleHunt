const square =document.querySelectorAll('.square');
const molde=document.querySelectorAll('.mole');
const timeLeft=document.querySelector('#timeleft');
let score=document.querySelector('#score');

let result=0;
let currentTime=timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
   className.classList.remove('mole')

    })
    let randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');

//assign the id of the randomPosition to hit Positino for us to use later square

hitPosition=randomPosition.id;

}

square.forEach(id=>{
id.addEventListener('mouseover',()=>{

    if (id.id===hitPosition) {
        result++;
        score.textContent=result;
    }
})

})

function moveMole() {
    let timerId=null;
    timerId=setInterval(randomSquare,1000)
}
moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent=currentTime;

    if (currentTime===0) {
        clearInterval(timerId);
        alert('Game Over your score is ' + result);
        window.location.reload();
    }
}
let timerId=setInterval(countDown,1000);