const a= document.querySelector('.burger-menu');
const b = document.querySelector('.nav');
const c = document.querySelector('.close');

a.addEventListener('click',()=>{
    b.classList.add('open');
   })
   c.addEventListener('click',()=>{
    b.classList.remove('open');
   })


window.onscroll = function(){
    b.classList.remove('open');
}
