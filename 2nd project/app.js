const header = document.querySelector('header');
const menuToggle = document.querySelector('.menuToggle');
const nav = document.querySelector('.nav');


window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0);

});
function toggleMenu(){
menuToggle.classList.toggle('active');
nav.classList.toggle('active');
};