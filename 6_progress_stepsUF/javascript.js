//Definir DOM

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; 

 

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.lenght){
        currentActive = circles.lenght

        
    }
   
    console.log(currentActive);
})