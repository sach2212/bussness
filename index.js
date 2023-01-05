
let searchbtn= document.querySelector('#search-btn')
let searchbar= document.querySelector('.search-container')

searchbtn.addEventListener('click', ()=>{

    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});
//  window.onscroll = ()=>{

//     searchbtn.classList.remove('fa-times');
//     searchbar.classList.remove('active');            scroll  bar

//  }


let login= document.querySelector('#log-btn');
let logcontainer= document.querySelector('.login-container');

login.addEventListener('click' ,()=>{

    logcontainer.classList.add('active');  
})


let formclose = document.querySelector('#form-close');



formclose.addEventListener('click', ()=>{
    logcontainer.classList.remove('active');



})

// -------------navbar mediaa--------------.

let navbar= document.querySelector('.navbar')
let menubar= document.querySelector('#menu-bar')

menubar.addEventListener('click',()=>{

    

   menubar.classList.toggle('fa-times');
   navbar.classList.toggle('active');
})


let videobtn= document.querySelectorAll('.vid-btn')

videobtn.forEach(e =>{

    e.addEventListener('click',()=>{

        document.querySelector('.controls .active').classList.remove("active");
        e.classList.add("active");

    let src= e.getAttribute('data-src')
    document.querySelector('#video-slider').src=src

    });
 });









// var swiper =  new Swiper(".review-slider", {
//     // slidesPerView: 1,
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//       delay:    200,
//       disableOnInteraction: false,
//     },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 1,
    //     // spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     // spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     // spaceBetween: 50,
    //   },
    // },
  // });


  // var swiper =  new Swiper(".brand-slider", {
  //   // slidesPerView: 1,
  //   spaceBetween: 20,
  //   loop:true,
  //   grabCursor:true,
    // autoplay: {
    //   delay:    2500,
    //   disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   }
    // breakpoints: {
    //   450: {
    //     slidesPerView: 2,
      
    //   },
    //   768: {
    //     slidesPerView: 3,
      
    //   },
    //   991: {
    //     slidesPerView: 4,
    //     // spaceBetween: 50,
    //   },1200: {
    //     slidesPerView: 5,
        
    //   },
    // },
  // });



    var swiper = new Swiper(".brand-slider", {

    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".client-slider", {
    loop:true,
    grabCursor:true,
    
    spaceBetween: 20,

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
            
        },
        990: {
          slidesPerView: 4,
            
        },
      }

  });