//menubar icon
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
});

//text change animation
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let lettes = word.textcontent.split("");
    word.textContent="";
    lettes.forEach((lettes)=>{

    })
});