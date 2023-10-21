/*Navigation Burger*/
const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

burger.addEventListener("click", () => {
    links.classList.toggle("hidden");
    bar1.classList.toggle("bg-accent-color");
    bar2.classList.toggle("bg-accent-color");
    bar3.classList.toggle("bg-accent-color");
});



$('.testimonials-slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: true,
    draggable: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          }
        }
        
    ]
});

// $('.category-slider').slick({
//     arrows: true,
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     centerMode: false,
//     draggable: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           variableWidth: false,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           variableWidth: false,
//         }
//       }
//     ]
//   });

$('.category-slider').slick({
  arrows: true,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  centerMode: false,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});

  
