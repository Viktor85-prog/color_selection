const cols = document.querySelectorAll('.col');

function generateRandomColor() {
	const hexCodes = '0123456789ABCDF';
	let color = '';
	
	for(let i=0;i<6;i++){
		color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
	}
	return '#' + color
}

function setRandomColors() {
	cols.forEach(col=> {
		const isLocked = col.querySelector('span').textContent  === 'lock';

		if (isLocked) {
			return
		}

		let color = chroma.random();
		testBlock = col.querySelector('h2');
		btn = col.querySelector('button');
		
		col.style.background = color;
		testBlock.textContent = color;
		
		setTextColor(testBlock, color);
		setTextColor(btn, color);
	});
}

function setTextColor(text, color) {
	let luminance = chroma(color).luminance();
	text.style.color = luminance>0.5 ?'black':'white'
}
setRandomColors();

document.addEventListener('keydown', (event => {
	event.preventDefault()
	if (event.code.toLocaleLowerCase() === 'space') {
		setRandomColors();
	}
}))


document.addEventListener('click', event=> {
	const type = event.target.dataset.type;
	const target = event.target;
	const tagName = event.target.tagName;
	const className = event.target.className;
	if (className === 'material-symbols-outlined') {
		if (target.textContent === 'lock') {
			target.textContent = 'lock_open';
		} else {
			target.textContent = 'lock';
		}	
	}

	if(type === 'copy') {
		copyToClickBoard(target.textContent)
	}
})

function copyToClickBoard(text) {
	return navigator.clipboard.writeText(text);
}