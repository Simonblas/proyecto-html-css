const menu = document.querySelector('#menuicon');
const navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const scrollreveal = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
});

scrollreveal.reveal('.hero', { delay: 100, origin: 'top' })
scrollreveal.reveal('.container-redes', { delay: 100, origin: 'bottom' })
scrollreveal.reveal('.pie', { delay: 100, origin: 'right' })


