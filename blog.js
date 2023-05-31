const closeBtn = document.getElementById('close_review');
const fullReviewSection = document.getElementById('full_review');
let vendorName = document.getElementById('vendor_name');
let reviewImage = document.getElementById('review_image');
let reviewRating = document.getElementById('rating');
let reviewText = document.getElementById('full_review_text');
let reviewList = document.getElementById('review_list');
const restaurants = document.querySelectorAll('.restaurant');

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

function displayReview(restaurant_name, rating=3.5, full_review=`It's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really goodIt's really really really good`, image_info=['shawarma.jpeg', 'shawarma'], review_list=[7, 5, 6, 8]){
    vendorName.innerHTML = restaurant_name;
    reviewRating.innerHTML = `Rating ${computeRating(rating)}`;
    reviewText.innerHTML = full_review;
    reviewList.innerHTML = `
    <li><i class="fa-solid fa-camera-retro fa-sm"></i>Aesthetics: <span class=${getColorCode(review_list[0])}>${review_list[0]}/10</span></li>
    <li><i class="fa-solid fa-utensils fa-sm"></i> Food: <span class=${getColorCode(review_list[1])}>${review_list[1]}/10</span></li>
    <li><i class="fa-solid fa-stopwatch fa-sm"></i>Wait Time: <span class=${getColorCode(review_list[2])}>${review_list[2]}/10</span></li>
    <li><i class="fa-solid fa-bell-concierge fa-sm"></i>Customer Service: <span class=${getColorCode(review_list[3])}>${review_list[3]}/10</span></li>`;
    reviewImage.setAttribute('src', `images/${image_info[0]}`);
    reviewImage.setAttribute('alt', image_info[1]);
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




// About Page