const container = document.getElementById('container');
const button = document.getElementById('sizeChanger');
button.addEventListener('click', () => {
	let userInput = prompt("Enter a number between 1 and 100");
	while (userInput > 100 || userInput < 1) {
		userInput = prompt("Wrong input. Please enter a number between 1 and 100")
	}
	container.textContent = '';
	generateGrid(userInput);
});
function randomRGB(){
	return 'rgb(' + Math.floor(Math.random() * 256) + (', ') + Math.floor(Math.random() * 256) + (', ') + Math.floor(Math.random() * 256) + ')';
}
function generateGrid(userInput){
	let size = (100 / userInput) + '%';
	for (let i = 0; i < (userInput ** 2); i+= 1){
			let div = document.createElement('div');
			div.setAttribute('class', 'grid');
			div.style.flexBasis = size;
			container.appendChild(div);
		}
	let allBoxes = document.querySelectorAll('.grid');
	allBoxes.forEach((div, index) => {
		let colorChanged = false;
		let transparency = 0.1;
		div.addEventListener('mouseover', () => {
			if(!colorChanged){
				div.style.backgroundColor = randomRGB();
				colorChanged = true;
			}
			div.style.opacity = transparency;
			if (transparency <= 1) {
				transparency = transparency + 0.1;
			}
		});
	});
}
generateGrid(16);


