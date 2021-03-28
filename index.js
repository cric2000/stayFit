let modal = document.querySelector('.contact-modal');
let box= document.querySelector('.display-box');
let cross = document.querySelector('.cross');

modal.addEventListener('click',()=>{
    box.style.display="block";
    box.style.pointerEvents="all";
});

cross.addEventListener('click',()=>{
    box.style.display="none";
    box.style.pointerEvents="none";
});
