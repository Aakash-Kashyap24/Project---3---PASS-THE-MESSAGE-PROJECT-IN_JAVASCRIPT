let enterInput=document.querySelector(".enterMessage");
let lastMessageShow=document.querySelector(".lastMessage");
let btn = document.querySelector(".btn");

btn.addEventListener('click', ()=>{
    
    lastMessageShow.innerHTML=enterInput.value;
    enterInput.value='';

})
