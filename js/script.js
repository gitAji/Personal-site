
const x=document.querySelector(".theme-switch");
const y=document.querySelector("body");

x.addEventListener("click",function(){
    y.classList.toggle("dark-mode");
}
)

// hamburger menu 
const hamburger=document.querySelector(".hamburger");
const menu=document.querySelector("nav");
const close=document.querySelector(".close");

hamburger.addEventListener("click",function(){
    console.log("clicked");
  menu.style.display="flex"; 
})
close.addEventListener("click",function(){
    menu.style.display="none";
}
)

const leftArrow=document.querySelector(".left-arrow");
const rightArrow=document.querySelector(".right-arrow");

leftArrow.addEventListener("click",function(){
    console.log("clicked");
 
});









  




