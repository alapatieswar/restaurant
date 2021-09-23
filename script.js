// --navbar menuicon--
var menu = document.getElementById('menu-bar');
var navbar= document.querySelector(".navbar");

menu.onclick=()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
// --search bar--

let section = document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header .navbar a');


window.onscroll=()=>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{
    let top = window.scrollY;
    let height =sec.offsetHeight;
    let offset = sec.offsetTop-100;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };
  });
}

document.querySelector('#search-icon').onclick=()=>{
  document.querySelector('#search-form').classList.toggle('activea');
}
document.querySelector('#close').onclick=()=>{ 
  document.querySelector('#search-form').classList.remove('active');
}

// --acive menu



// --homesection--
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    loop: true,
    },
  });



  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    
   loop:true,
   breakpoints:{
     0:
     {
       slidesPerView:1,
     },
     640:
     {
       slidesPerView:2,
     },
     768:
     {
       slidesPerView:2,
     },
     1024:
     {
       slidesPerView:3,
     },
   },
  });



  // --loader
function loader()
{
  document.querySelector('.load-container').classList.add("fade-out");
}

function fadeOut(){
  setInterval(loader,3000);
}

window.onload = fadeOut;