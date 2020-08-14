var instance = new vidbg(".main__earth", {
    mp4: "video/world.mp4", // URL or relative path to MP4 video
    webm: "video/world.webm", // URL or relative path to webm video
    poster: "img/earth.png", // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
    overlayColor: "#000", // The overlay color as a HEX
    overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
  });
  var rellax = new Rellax('.main__rocket-img', {
    breakpoints:[576, 768, 1201]});


const body = document.querySelector("html");
const menuBtn = document.querySelector(".header__menu-mobile");
const menuBtnLine1 = document.querySelector(".menu-mobile__line-1");
const menuBtnLine2 = document.querySelector(".menu-mobile__line-2");
const menuBtnLine3 = document.querySelector(".menu-mobile__line-3");
//const menuBtnLineBefore = document.querySelector(".header__m-menu-line");
const navTabletMenu = document.querySelector(".header__nav-m-menu");
menuBtn.addEventListener("click",function(){
  menuBtnLine1.classList.toggle("menu-mobile__line-1--active");
  menuBtnLine2.classList.toggle("menu-mobile__line-2--active");
  menuBtnLine3.classList.toggle("menu-mobile__line-3--active");
  navTabletMenu.classList.toggle("header__nav-m-menu--active");
  body.classList.toggle("overflow--active");
   // console.log("проверка");
   // let b = window.innerWidth;
   // console.log(b);
  //document.documentElement.scrollTop = 0;
});
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0){
  window.addEventListener('scroll',animOnScroll);
  function animOnScroll(params){
    for (index = 0;index < animItems.length;index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
        animItem.classList.add('active');
      }else{
        animItem.classList.remove('active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left:rect.left+scrollLeft} 
  }
}