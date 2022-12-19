// functions for heading and navigation
function colorPop() {
    let highlightHeading = document.querySelector('.company-logo');
    console.log(highlightHeading)
    highlightHeading.style.color = "#FFA3AF";
    highlightHeading.style.backgroundColor = "#007CBE";

}

const menuToggle = document.querySelector(".menutoggle");
const navigation = document.querySelector(".nav");
menuToggle.onclick = function() {
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

//functions for subsciption page
function colorPop() {
    let highlightHeading = document.querySelector('.company-logo');
    console.log(highlightHeading)
    highlightHeading.style.color = "#FFA3AF";
    highlightHeading.style.backgroundColor = "#007CBE";

}

function dropDownColor() {
    let highlightDropDown = document.querySelector('select');
    console.log(highlightDropDown);
    highlightDropDown.style.backgroundColor = "#FFD639"
}

function signupColor() {
    let highlightSignup = document.querySelector('.signup-sign');
    console.log(highlightSignup);
    highlightSignup.style.backgroundColor = "#FFD639";
    highlightSignup.style.color = "#007CBE";
}

function highlightSignupWord() {
    let highlightSignupWord = document.querySelector('.signup-sign');
    console.log(highlightSignupWord);
    highlightSignupWord.style.color = "#00AF54";
}

function unhighlightSignup() {
    let unhighlightSignup = document.querySelector('.signup-sign');
    console.log(unhighlightSignup);
    unhighlightSignup.style.color = "black";
    unhighlightSignup.style.backgroundColor = "white";
}
