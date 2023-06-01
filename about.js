const imageContainer = document.getElementById('my-image-container');
let myImage = imageContainer.children[0];
let imageLocation = imageContainer.children[1]

const my_pictures = [ 
    {image: 'tomi_black.jpeg', alt_text: 'Tomi wearing black standing next to a car', location: 'Christmas Village Calabar'}, 
    {image: 'tomi_cilantro.jpg', alt_text: 'Tomi seated at Cilantro Abuja', location: 'Cilantro Abuja'}, 
    {image: 'tomi_matric.JPG', alt_text: 'Tomi at his matriculation ceremony', location: 'Nile University of Nigeria, Abuja'}, 
    {image: 'tomi_eating.jpg', alt_text: 'Tomi using his phone with plates in front of him', location: 'Transcorp, Calabar'} 
];

function generateRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}

setInterval(() => { 
    let index = generateRandomIndex(my_pictures);
    let newImageSource = 'images/' + my_pictures[index].image;
    while(newImageSource == myImage.src){
        index = generateRandomIndex(my_pictures);
    }
    myImage.src = 'images/' + my_pictures[index].image; 
    myImage.alt = my_pictures[index].alt_text;
    imageLocation.innerHTML = '<i class="fa-solid fa-location-dot fa-sm"></i>' + my_pictures[index].location;
}, 18000);