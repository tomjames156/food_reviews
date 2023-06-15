const closeBtn = document.getElementById('close_review');
const fullReviewSection = document.getElementById('full_review');
let vendorName = document.getElementById('vendor_name');
let reviewImage = document.getElementById('review_image');
let reviewRating = document.getElementById('rating');
let reviewText = document.getElementById('full_review_text');
let reviewList = document.getElementById('review_list');
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
    { restaurant_name: 'Tray Blazers', review: 'Tray Blazers is a restaurant at Nile, they sell mostly African dishes. The aesthetics are nice but it looks plagiarized from Dominoes Pizza. The customer service is kind of awkward but the food is good.', rating: 4.0, image_info:['tray_blazers.jpeg', 'fried rice'], reviews_list: [7.5, 5, 6, 8]},
    { restaurant_name: 'Suya Craze', review: `Suya Craze, is a restaurant and probably the first place you think of when you think of food court in Nile. The aesthetics with the black bamboo shade is quite nice. However, the food is okay. It's an awesome spot to chill at food court and it looks even better at night. The customer service is terrible and orders can take too long which is annoying`, rating: 3.0, image_info:['suya_craze.jpeg', 'suya on a grill'], reviews_list: [9, 7, -5, 0]},
    { restaurant_name: 'Street Food', review: 'Street Food is a reaturant just beside Suya Craze. I haven\'t been there before but I heard their food is alright but not memorable. They have great aesthetics with the food truck style stand.', rating: 4.0, image_info:['milkshakers.jpeg', 'oreo milkshake with caramel'], reviews_list: [7, 5, 6, 8]},
    { restaurant_name: 'W-Sauce', review: `W-Sauce, they're mostly known to sell Arabian sandwich, shawarmas, fries, rice and other things. The Arabian sandwich is the best thing to order from them, their shawarma is okay but they put ketchup in it which is weird. Their customer service could be better but it's not too bad I guess.`, rating: 3.0, image_info:['shawarma.jpeg', 'shawarma'], reviews_list: [7, 7.5, 6, 6]},
    { restaurant_name: 'Quintavi', review: 'Quintavi, the best place in the whole of food court in my opinion. They sell burgers, shawarma and chinese rice. My favourite thing to order from them is shawarma, their food reminds me of <a href="https://www.cilantrorestaurants.com/" target="_blank">Cilantro</a> which I love. Their rice is also good but the whole sausage in rice thing is weird. Their customer service is great but they could work on the aesthetics.', rating: 5.0, image_info:['quintavi.jpeg', 'cheese burger'], reviews_list: [2, 9.5, 10, 10]},
    { restaurant_name: 'PapaRimz Pizza', review: `Papa Rimz is an underrated food vendor with awesome stuff. They sell things like milkshakes, Chinese rice, shawarma, and spaghetti. Everything is good and reliable. My favourite thing to get from them is literally any type of rice because it's reminiscent of a Chinese restaurant. They should work on their outdoor aesthetics though.`, rating: 4.5, image_info:['paparimz.jpeg', 'pizza in a box with ginger drink and chicken side'], reviews_list: [0, 9.7, 10, 10]},
    { restaurant_name: 'Zulkys', review: 'Zulkys is like a food truck and they sell regular junk food like shawarma, milkshakes and spaghetti. Their shawarma is quite expensive in my opinion but it tastes great. They have the best milkshakes at the Food Court according to several sources. Their customer service is also okay.', rating: 4.0, image_info:['zulkys.jpg', 'shawarma'], reviews_list: [5, 8, 8, 7]},
    { restaurant_name: 'African Kitchen', review: `African kitchen is the last restaurant at the food court and their outdoor sitting is very beautiful. They also sell affordable and good african foods like jollof rice and swallows. They also sell good jollof rice.`, rating: 4.5, image_info:['african_kitchen.jpeg', 'nigerian jollof rice'], reviews_list: [9, 8, 8, 7]},
]

function showReview(restaurant_obj){
    vendorName.innerHTML = restaurant_obj.restaurant_name;
    reviewRating.innerHTML = `<span class="rating_stars">${computeRating(restaurant_obj.rating)}</span><span class="rating_text">(${restaurant_obj.rating}/5)</span>`;
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