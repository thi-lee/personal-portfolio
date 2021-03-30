let projectContainer = document.querySelector('#projects-display');
let project1 = document.createElement('button');
project1.classList.add('etch-a-sketch');
project1.textContent = 'Etch-a-sketch';
project1.style.font = "italic 30px 'Courier New', Courier, monospace";
project1.addEventListener('mouseenter', function() {project1.classList.add('hovering');})
project1.addEventListener('mouseleave', function() {project1.classList.remove('hovering');})
project1.addEventListener('click', function() {window.location.href = "etch-a-sketch/index.html";})
projectContainer.appendChild(project1);

// CLOCK
let hand = document.querySelector('.hand');
let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
  let now = new Date() // get now time
  let seconds = now.getSeconds(); // get now second
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  let minutes = now.getMinutes();
  let minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  let hours = now.getHours();   
  let hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();