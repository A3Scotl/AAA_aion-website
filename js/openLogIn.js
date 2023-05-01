
let Login = document.querySelector(".user")
let closelogin = document.getElementById('close_login')
Login.addEventListener('click',()=>{
   body.classList.add('open_form-login');
})
closelogin.addEventListener('click',()=>{
   body.classList.remove('open_form-login');
})
