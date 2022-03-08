const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

const colors = ['#454B1B', '#023020', '#50C878', '#355E3B', '#C9CC3F', '#8A9A5B', '#808000', '#C4B454'];

function getRandomColor() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	const randomColor = colors[randomIndex];

	return randomColor;
};

for (let i = 0; i < SQUARES_NUMBER; i++) {

	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', function () {
		const color = getRandomColor();  //! вызываю функцию, которая возвращает случайный цвет
		this.style.backgroundColor = color;
		this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;  //! благодаря двум теням создаётся эффект свечения
	});

	square.addEventListener('mouseleave', function () {
		this.style.backgroundColor = '#1d1d1d';
		this.style.boxShadow = `0 0 2px #000`;
	});

	board.append(square);
};


