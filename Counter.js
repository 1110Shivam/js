const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const style = e.currentTarget.classList;
		if(style.contains('plus'))
			count++;
		else if(style.contains('minus'))
			count--;
		else
			count = 0;
		counter.textContent = count;
	});
});
