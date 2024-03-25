// const header = document.querySelector('header')
// const headerDiv = document.querySelector('header > div')
// const elScrl = document.querySelector('section')
// const elScrlDivs = document.querySelectorAll('section > div')
// const btn = document.querySelector('button')



// const elBody = document.querySelector('body')

// let divNum = elScrlDivs.length; //각 페이지 갯수
// divNum = `${divNum * 100}vh` //각 페이지 합친 길이
// document.documentElement.style.height = divNum; 
//   //문서의 루트요소(일반적으로 <html>태그를 의미)에 적용
// //elBody.style.height = divNum /이렇게도됨 


// let pos = {
//   y:0,  //현재 위치값 y
//   oy:0, //과거 위치값 y
//   status:true //boolean( true - 내려오는중 / false - 올라오는중 )
// }

// function scrollState(){
//   pos.y = window.scrollY;//현재 스크롤값
//   console.log(pos.y)
//   pos.status = pos.oy < pos.y 
//   pos.oy = pos.y
// }


// function scrollFunc(){
// headerDiv.innerHTML = `
// 스크롤 현재값 <span>${pos.y}</span> / 
//   스크롤 전체 길이 <span>${document.scrollingElement.scrollHeight}</span>/

// 스크롤이 아래로 내려오는 중? <span>${pos.status} </span>
// `
// if(pos.status){
// header.classList.add('scrl')
// }  else {        
//     header.classList.remove('scrl')
//   }

// }

 let num = 0;//스크롤 된 숫자
// let time; //timeout용

// window.addEventListener('scroll', ()=>{
// scrollFunc();
// scrollState()

// clearTimeout(time)

// time = setTimeout(function(){
// if(pos.status){
// if(num !=4 ) num++;
// } else {
// if(num != 0 ) num--
// }
// console.log('스크롤된 숫자 - ', num)
// elScrl.style = `transform:translateY(-${90*num}%)`
// }, 100)

// })




//스크롤//////////////////////

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  let index = 0;

  function scrollToNextSection() {
      if (index < sections.length - 1) {
          index++;
          sections[index].scrollIntoView({ behavior: 'smooth' });
      }
  }

  document.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
          scrollToNextSection();
      }
  });
});



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
// const swiper = new Swiper('.slider', {
//   //loop: true,
//   //slidesToScroll: 3,
//   //direction: 'horizontal',
//   //autoplay: true, 
//   //autoplaySpeed: 2000,

//   breakpoints: {
//     1440: {
//       slidesPerView: 5, //한번에 보일 갯수
//       spaceBetween: 20, // 사이 간격
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     390: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//   },
// });
