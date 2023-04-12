/*lăn chuột trên web đổi màu header*/
$(document).ready(function() {
   $(window).scroll(function() {
       if ($(this).scrollTop()) {
           $('header').addClass('scroll_nav');
       } else
           $('header').removeClass('scroll_nav');
   });
});
/*mở modal*/
let Shopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.close');
let body = document.querySelector('body')
Shopping.addEventListener('click',()=>{
   body.classList.add('open');
})
closeShopping.addEventListener('click',()=>{
   body.classList.remove('open');
})

const login = document.getElementById('login')
const closelogin = document.getElementById('close_login')
login.addEventListener('click',()=>{
   body.classList.add('open_login');
})
closelogin.addEventListener('click',()=>{
   body.classList.remove('open_login');
})
/*xóa item trong shopping cart*/
var $removeItem = $('.remove');
$removeItem.on('click',function(){
   var $item = $(this).parents('.cart_item');
   $item.remove();
})
/*Thông báo thêm sản phẩm thành công*/
let add_to_cart = document.querySelector('.add-to-cart');
add_to_cart.addEventListener('click',()=>{
   alert("Thêm sản phẩm thành công!!");
}) 

