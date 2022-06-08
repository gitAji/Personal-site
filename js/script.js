
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

// back to top
const btn=document.querySelector(".back-top");


window.addEventListener("scroll",function(){
    if(window.scrollY>300){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}
)

btn.addEventListener("click",function(){
    window.scrollTo(0,0);
}
)












  




