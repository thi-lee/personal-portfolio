let container = document.querySelector('.container');
let instructions = document.querySelector('.instructions');
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let rset = document.createElement('button'); 
let colorContainer = document.createElement('div');
let opaque = document.createElement('button'); 
let rainbow = document.createElement('button'); 

instructions.appendChild(rset).classList.add('rset');
instructions.appendChild(opaque).classList.add('opaque');
instructions.appendChild(rainbow).classList.add('rainbow');
instructions.appendChild(colorContainer).classList.add('colorContainer');

rset.textContent = 'Reset';
opaque.textContent = 'Opaque';
rainbow.textContent = 'Rainbow';

let subColor = document.querySelector('.colorContainer');
let color = document.createElement('button'); 
color.textContent = 'Color';
let chooseColor = document.createElement('input');
chooseColor.type = 'color';
chooseColor.value = 'black';
subColor.appendChild(color).classList.add('color');
subColor.appendChild(chooseColor).classList.add('chooseColor');


let newSet = true;
if (newSet) {
  makegrid(16);
  setHover();
}

output.textContent = slider.value;
slider.addEventListener('input', function() {
  output.textContent = this.value;
})

rset.addEventListener('click', function() {
  rSetHover(slider.value, rset.className);
})

color.addEventListener('click', function() {
  rSetHover(slider.value, color.className);
})

opaque.addEventListener('click', function() {
  rSetHover(slider.value, opaque.className);
})

rainbow.addEventListener('click', function() {
  rSetHover(slider.value, rainbow.className);
})


// functions
function clearAll() {
  container.innerHTML = ' ';
}

function makegrid(rows) {
  clearAll()
  container.style.gridTemplateColumns = (`repeat(${rows}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${rows}, 1fr`);
  for (i = 1; i <= rows * rows; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).classList.add('grid-item', i);
  }
  if (newSet) {newSet = false;}
  return newSet;
}

function setHover(buttonClass) {
  let cells = document.querySelectorAll('.grid-item');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', function() {
      switch(buttonClass) {
        case ('rset') :
          cell.style.backgroundColor = 'white';
          break;
        case('color'):
          cell.style.backgroundColor = chooseColor.value;
          break;
        case('opaque'): // need debugging 
          if (this.style.backgroundColor.match(/rgba/)) {
            console.log('1');
            let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                this.classList.add('opaque');
            }
          } else if (this.classList == 'opaque' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
            console.log('2');
            return;
          } else {
            console.log('3');
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
          }
          break;  
        case('rainbow'):
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          cell.style.backgroundColor = "#" + randomColor;
          break;
        default: 
          cell.style.backgroundColor = 'black';
      }
    })
  })
}

function rSetHover(rows, buttonClass) {
  let cells = document.querySelectorAll('.grid-item');
  if (buttonClass == 'rset') {
    cells.forEach((cell) => {
      cell.classList.remove('hovering');
    })
    newSet = makegrid(rows);
    makegrid(rows);
    setHover(buttonClass);
  } else {
    setHover(buttonClass);
  }

}