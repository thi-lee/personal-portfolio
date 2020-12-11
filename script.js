let projectContainer = document.querySelector('#projects-display');
let project1 = document.createElement('button');
project1.classList.add('etch-a-sketch');
project1.textContent = 'Etch-a-sketch';
project1.style.font = "bold 20px 'Cedarville Cursive', cursive";
project1.addEventListener('mouseenter', function() {project1.classList.add('hovering');})
project1.addEventListener('mouseleave', function() {project1.classList.remove('hovering');})
project1.addEventListener('click', function() {window.location.href = "etch-a-sketch/index.html";})
projectContainer.appendChild(project1);