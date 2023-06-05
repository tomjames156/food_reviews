const closeBtn = document.getElementById('close_review');
const fullReviewSection = document.getElementById('full_review');
let vendorName = document.getElementById('vendor_name');
let reviewImage = document.getElementById('review_image');
let reviewRating = document.getElementById('rating');
let reviewText = document.getElementById('full_review_text');
let reviewList = document.getElementById('review_list');
let viewMenuLink = document.getElementById('view_menu');
const restaurants = document.querySelectorAll('.restaurant');
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

for (let restaurant of restaurants){
    restaurant.addEventListener('mouseover', () => {
        restaurant.children[0].children[1].style.display = 'block';
        restaurant.children[0].children[1].addEventListener('mouseover', () => {
            restaurant.classList.add('hovered');
        })
        restaurant.children[0].children[1].addEventListener('click', () => {
            restaurant.children[0].children[0].click();
        })
    })
}

for (let restaurant of restaurants){
    restaurant.addEventListener('mouseout', () => {
        restaurant.classList.remove('hovered');
        restaurant.children[0].children[1].style.display = 'none';
    })
}

for (let restaurant of restaurants){
    restaurant.addEventListener('click', () => {
        restaurant.children[0].children[0].click();
        fullReviewSection.style.display = 'flex';
        hideRestaurants();
        location.href = '#restaurants';
    })
}

closeBtn.addEventListener('click', () => {
    fullReviewSection.style.display = 'none';
    setTimeout(() => hideRestaurants, 5000);
    showRestaurants();
})

function showRestaurants(){
    for (let restaurant of restaurants){
        restaurant.style.filter = ""
        restaurant.style.pointerEvents = 'auto';
    }
}

function hideRestaurants(){
    for (let restaurant of restaurants){
        restaurant.style.filter = "blur(2px) grayscale(70%)"
        restaurant.style.pointerEvents = 'none';
    }
}

const restaurants_info = [
    { restaurant_name: 'Tray Blazers', review: '', rating: 4.0, image_info:['tray_blazers.jpeg', 'fried rice'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'Suya Craze', review: `Suya Craze, is a restaurant and probably the first place you think of when you think of food court in Nile. The aesthetics with the black bamboo shade is quite nice. However, the food is just not that good. The suya is the only thing you should get if you have to order something from them. It's an awesome spot to chill at food court and it looks even better at night. The customer service is terrible and orders can take about 25 minutes to get ready which is not reasonable in my opinion.`, rating: 3.0, image_info:['suya_craze.jpeg', 'suya on a grill'], reviews_list: [7, 5, -5, 0]},
    { restaurant_name: 'Street Food', review: '', rating: 4.0, image_info:['milkshakers.jpeg', 'oreo milkshake with caramel'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'W-Sauce', review: '', rating: 3.0, image_info:['shawarma.jpeg', 'shawarma'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'Quintavi', review: '', rating: 5.0, image_info:['quintavi.jpeg', 'cheese burger'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'PapaRimz Pizza', review: '', rating: 4.5, image_info:['paparimz.jpeg', 'pizza in a box with ginger drink and chicken side'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'Zulkys', review: '', rating: 4.0, image_info:['zulkys.jpg', 'shawarma'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'African Kitchen', review: '', rating: 4.5, image_info:['african_kitchen.jpeg', 'nigerian jollof rice'], reviews_list: [7, 5, 6, 8]},
]

function showReview(restaurant_obj){
    vendorName.innerHTML = restaurant_obj.restaurant_name;
    reviewRating.innerHTML = `<span id="rating_text">Rating</span> ${computeRating(restaurant_obj.rating)}`;
    if (restaurant_obj.review == ''){
        reviewText.innerHTML = `It's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really good`;
    }else{
        reviewText.innerHTML = restaurant_obj.review;
    }
    reviewList.innerHTML = `
    <li><i class="fa-solid fa-camera-retro fa-sm"></i>Aesthetics: <span class=${getColorCode(restaurant_obj.reviews_list[0])}>${restaurant_obj.reviews_list[0]}/10</span></li>
    <li><i class="fa-solid fa-utensils fa-sm"></i> Food: <span class=${getColorCode(restaurant_obj.reviews_list[1])}>${restaurant_obj.reviews_list[1]}/10</span></li>
    <li><i class="fa-solid fa-stopwatch fa-sm"></i>Wait Time: <span class=${getColorCode(restaurant_obj.reviews_list[2])}>${restaurant_obj.reviews_list[2]}/10</span></li>
    <li><i class="fa-solid fa-bell-concierge fa-sm"></i>Customer Service: <span class=${getColorCode(restaurant_obj.reviews_list[3])}>${restaurant_obj.reviews_list[3]}/10</span></li>`;
    reviewImage.setAttribute('src', `images/${restaurant_obj.image_info[0]}`);
    reviewImage.setAttribute('alt', restaurant_obj.image_info[1]);
    viewMenuLink.setAttribute('href', `images/${restaurant_obj.image_info[0]}`)
}

function computeRating(rating){
    let remainder = parseInt(rating) - rating;
    let output_rating = '';
    
    for(let i = parseInt(rating); i > 0; i-=1){
        output_rating += `<i class="fa-solid fa-star"></i>`
    }

    if(remainder !== 0){
        output_rating += `<i class="fa-solid fa-star-half"></i>`
    }

    return output_rating
}

function getColorCode(score){
    if(score > 7){
        return 'good';
    }else if(score > 4){
        return 'okay';
    }else{
        return 'bad';
    }
}