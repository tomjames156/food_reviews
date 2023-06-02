const sideNavBtn = document.getElementById('mobile-nav-btn');
const closeSideNavBtn = document.getElementById('close-side-nav');
const sideNav = document.getElementById('side-nav');
const mainContent = document.querySelector('main');
const mainNav = document.querySelector('nav#nav');
const places = document.querySelectorAll('.place');


sideNavBtn.addEventListener('click', () => {
    sideNav.classList.remove('hide');
    mainContent.style.filter = `opacity(0.5)`;
    mainContent.style.pointerEvents = 'none';
    mainNav.style.filter = `opacity(0.9)`;
    mainNav.style.pointerEvents = 'none';
})

closeSideNavBtn.addEventListener('click', () => {
    sideNav.classList.add('hide');
    mainContent.style.filter = `opacity(1)`;
    mainContent.style.pointerEvents = 'auto';
    mainNav.style.filter = `opacity(1)`;
    mainNav.style.pointerEvents = 'auto';
})

for(let place of places){
    place.addEventListener('mouseover', () => {
        place.classList.add('check_rating');
    });
    place.addEventListener('mouseout', () => {
        place.classList.remove('check_rating');
    })
    place.children[1].children[0].addEventListener('mouseover', () => {
        place.classList.add('check_rating');
    });
}