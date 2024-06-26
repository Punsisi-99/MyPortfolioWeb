//nav bar scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

//menubar icon
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
});

//counting of portfolio
const projectCount = document.querySelector(".portfolio-container .portfolio-box");
const volunteeringCount = document.getElementById("volunteering");
const certificatesCount = document.getElementById("certificates");

function countProject(){
    let projects = portfolio-container.value;
}