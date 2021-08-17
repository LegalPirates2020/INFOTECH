const hides = document.querySelectorAll('.hide');
const learnMore = document.querySelector('.learn-more');

const handleClick = () => {
	hides.forEach((hide) => {
		hide.style.display = 'block';
		learnMore.setAttribute('disabled', 'true');
	});
};
