const sideNavBtn = document.getElementById('mobile-nav-btn');
const closeSideNavBtn = document.getElementById('close-side-nav');
const sideNav = document.getElementById('side-nav');
const mainContent = document.querySelector('main');
const mainNav = document.querySelector('nav#nav');
const submitBtn = document.getElementById('submit_btn');
let submitLink = document.getElementById('send_btn');
const emailForm = document.getElementById('email_form');

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

submitLink.addEventListener('click', () => {
    submitBtn.click();
    addEmail();
    emailForm.submit();
})

function addEmail(){
    let fullNameInput = document.getElementById('full_name').value;
    let emailInput = document.getElementById('email').value;
    let subjectInput = document.getElementById('message_subject').value + ` (From: ${fullNameInput}; Email: ${emailInput})`;
    let messageBodyInput = document.getElementById('message').value;
    submitLink.setAttribute("href", `mailto:tomjames156@gmail.com?subject=${mimeText(subjectInput)}&body=${mimeText(messageBodyInput)}`)
}

emailForm.addEventListener('submit', () => {
    submitLink.click();
})


function mimeText(sentence){
    let words = sentence.split(' ');
    let mimeText = words[0];

    for(i = 1; i < words.length; i++){
        mimeText += `%20${words[i]}`
    }

    return mimeText;
};