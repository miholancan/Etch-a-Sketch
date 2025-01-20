const container = document.getElementById('container');

for (let i = 0; i < 256; i+= 1){
		const div = document.createElement('div');
		container.appendChild(div);
		div.setAttribute('class', 'grid');
	}