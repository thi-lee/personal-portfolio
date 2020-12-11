let container = document.querySelector('.container');
let instructions = document.querySelector('.instructions');
let rset = document.createElement('button');
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let newSet = true;
if (newSet) {
  makegrid(16);
  setHover();
}

rset.textContent = 'Reset';
rset.style.font = "bold 20px 'Cedarville Cursive', cursive";
instructions.appendChild(rset).classList.add('rset');

output.textContent = slider.value;
slider.addEventListener('input', function() {
  output.textContent = this.value;
})

rset.addEventListener('click', function() {
  rSetHover(slider.value)
});

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

function setHover() {
  let cells = document.querySelectorAll('.grid-item');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', function() {
      cell.classList.add('hovering');
    })
  })
}

function rSetHover(rows) {
  let cells = document.querySelectorAll('.grid-item');
  cells.forEach((cell) => {
    cell.classList.remove('hovering');
  })
  newSet = makegrid(rows);
  makegrid(rows);
  setHover();
}