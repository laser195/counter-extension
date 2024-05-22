let screen = document.getElementById('screen');
let increase = document.getElementById('pluse');
let decrease = document.getElementById('mines');
let x = 0;

screen.textContent = 0; 
     const increaseing = () => {
        if (x < 1000) {
            x = x + 1
            screen.textContent = x
        }
    }
         const decreaseing = () => {
        if (x > 0) {
            x = x - 1
            screen.textContent = x
        }
    }
const restBtn = document.querySelector('span')   
increase.addEventListener('click',increaseing);
decrease.addEventListener('click',decreaseing);
restBtn.addEventListener('click',()=>{
    location.reload();
})