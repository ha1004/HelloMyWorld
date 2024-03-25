

// 디자인 탭
$('.tabMenu li:first-child').addClass('active'); 

$('.tabBody > div:gt(0)').hide();

$('.tabMenu li').click(function(){
  var num = $(this).index();
  console.log(num)
  $('.tabMenu li').removeClass('active');
  $(this).addClass('active')

  $('.tabBody > div').hide();
  $('.tabBody > div').eq(num).show()
})
 

//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 2,// 사이 간격
  centeredSlides: true,
  slidesPerView: 5, //한번에 보일 갯수


  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
        1880: {
          slidesPerView: 4, //한번에 보일 갯수
          spaceBetween: 20, // 사이 간격
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
});


//스크롤 
const header = document.querySelector('header')


// more버튼을 누르면 sns내용이 더 보임


$('.moreBtn').click(function(){
  $('.item_wrap_more').show();
  $('.readmore').hide();
})


//위로 올라가기 버튼
const scroll_top_btn = document.querySelector('.scroll_top_btn')

scroll_top_btn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

// 
window.addEventListener('scroll', ()=>{
  const scroll = window.scrollY;
  console.log(scroll)

  if( scroll > 850 ){
    $body.classList.add('scrolling');
    scrollTop_btn.classList.add('on')
  } else {
    $body.classList.remove('scrolling')
    scrollTop_btn.classList.remove('on')
  }
})