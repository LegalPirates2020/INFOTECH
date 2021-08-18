const hides1 = document.querySelectorAll('.hide1');
const hides2 = document.querySelectorAll('.hide2');
const hides3 = document.querySelectorAll('.hide3');
const learnMore1 = document.querySelector('.learn-more1');
const learnMore2 = document.querySelector('.learn-more2');
const learnMore3 = document.querySelector('.learn-more3');

const handleClick1 = () => {
	hides1.forEach((hide) => {
		hide.style.display = 'block';
		learnMore1.style.display = "none";
	});
};

const handleClick2 = () => {
	hides2.forEach((hide) => {
		hide.style.display = 'block';
		learnMore2.style.display = 'none'
	});
};

const handleClick3 = () => {
	hides3.forEach((hide) => {
		hide.style.display = 'block';
		learnMore3.style.display = "none";
	});
};
