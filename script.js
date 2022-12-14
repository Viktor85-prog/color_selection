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
		// let color = generateRandomColor();
		let color = chroma.random();
		testBlock = col.querySelector('h2');

		col.style.background = color;
		testBlock.textContent = color;

		setTextColor(testBlock, color);
	});
}


function setTextColor(text, color) {
	let luminance = chroma(color).luminance();
	text.style.color = luminance>0.5 ?'black':'white'
}
setRandomColors();