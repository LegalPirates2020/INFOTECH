const hero = document.querySelector('.hero');
const laptop = document.querySelector('.laptop');
const layers = document.querySelectorAll('.layer');
const words = document.querySelectorAll('.Words');
const IT = document.querySelector('.name-backdrop');

const parallax = (args, e) => {
	args.forEach((arg) => {
		let speed = arg.getAttribute('data-speed');
		const x = (e.pageX * speed) / 100;
		const y = (e.pageY * speed) / 100;
		arg.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
};
hero.addEventListener('mousemove', (e) => {
	parallax(layers, e);
	parallax(words, e);
	const x = (e.pageX * 1) / 100;
	const y = (e.pageY * 1) / 100;
	IT.style.transform = `translateX(${x}px) translateY(${y}px) scale(14)`;
});
