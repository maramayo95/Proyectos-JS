let password = document.querySelector('#password');
let div  = document.querySelector('#password-print');

div.style.display = "none";

function generarPass() {
   
 const randomPass =   (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
 console.log(randomPass);

 div.innerHTML = `<p>${randomPass}</p>`

 div.style.display = "block";
 
    
}


password.addEventListener('click', generarPass);

