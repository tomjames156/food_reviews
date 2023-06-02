const imageContainer = document.getElementById('my-image-container');
let myImage = imageContainer.children[0];
let imageLocation = imageContainer.children[1];
const sideNavBtn = document.getElementById('mobile-nav-btn');
const closeSideNavBtn = document.getElementById('close-side-nav');
const sideNav = document.getElementById('side-nav');
const mainContent = document.querySelector('main');
const mainNav = document.querySelector('nav#nav');


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

const my_pictures = [ 
    {image: 'tomi_eating.jpg', alt_text: 'Tomi using his phone with plates in front of him', location: 'Transcorp, Calabar'},
    {image: 'tomi_black.jpeg', alt_text: 'Tomi wearing black standing next to a car', location: 'Christmas Village Calabar'}, 
    {image: 'tomi_cilantro.jpg', alt_text: 'Tomi seated at Cilantro Abuja', location: 'Cilantro Abuja'}, 
    {image: 'tomi_dominoes.jpeg', alt_text: 'Tomi at Dominoes Pizza with his siblings', location: 'Dominoes Pizza, Calabar'},
    {image: 'tomi_golden_dragon_restaurant.jpeg', alt_text: "Tomi at a Chinese Restaurant", location: 'Golden Dragon Chinese Restaurant, Calabar'},
    {image: 'tomi_transcorp.jpeg', alt_text: "Tomi at the transcorp hilton entrance in Abuja", location: "Transcorp Hilton, Abuja"}
];

// function generateRandomIndex(array){
//     return Math.floor(Math.random() * array.length)
// }

// setInterval(() => { 
//     let index = generateRandomIndex(my_pictures);
//     let newImageSource = 'images/' + my_pictures[index].image;
//     while(newImageSource == myImage.src){
//         index = generateRandomIndex(my_pictures);
//     }
//     myImage.src = 'images/' + my_pictures[index].image; 
//     myImage.alt = my_pictures[index].alt_text;
//     imageLocation.innerHTML = '<i class="fa-solid fa-location-dot fa-sm"></i>' + my_pictures[index].location;
// }, 18000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeImageDetails(image_obj){
        myImage.src = 'images/' + image_obj.image; 
        myImage.alt = image_obj.alt_text;
        imageLocation.innerHTML = '<i class="fa-solid fa-location-dot fa-sm"></i>' + image_obj.location;
}

(async function changeImage(){
    for(let i = 0; i < my_pictures.length; i++){
        changeImageDetails(my_pictures[i]);
        await sleep(20000);
    }
    changeImageDetails(my_pictures[0]);
})();