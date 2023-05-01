let Shopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.close');
let body = document.querySelector('body')
Shopping.addEventListener('click',()=>{
   body.classList.add('open');
})
closeShopping.addEventListener('click',()=>{
   body.classList.remove('open');
})