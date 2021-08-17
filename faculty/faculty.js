
const cardContent = document.querySelectorAll('.container-2');
const scrollContent = document.querySelectorAll('.scroll-content')
scrollContent.forEach(element => {
  element.addEventListener('click', function content() {
    // scrollContent.forEach(content => content.classList.remove('animation'));
    cardContent.forEach(content => content.classList.remove('show'));
    console.log(this)
    scrollContent.forEach(btn => btn.classList.remove('color'))
    this.classList.add('color');
    const carContentItems = document.querySelector(`.${this.id}-content`);
    carContentItems.classList.add('show');
  })
});