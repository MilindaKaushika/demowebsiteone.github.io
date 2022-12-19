// Mobile responsive naverbar sticky
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// Mobile Resposive naver bar javascript
let menu = document.querySelector('#menu-icon');
let naverbar = document.querySelector('.naverbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    naverbar.classList.toggle('open');
}