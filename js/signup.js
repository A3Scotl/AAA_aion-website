function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var erUser = document.getElementById("errUser");
    var email = document.getElementById("email").value;
    var rgexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //example@email.com/
    var erEmail = document.getElementById("errEmail");
    var password = document.getElementById("password").value;
    var rgexPass = /^.{8,}$/;
    // 12345678/;
    var erPass = document.getElementById("errPas");
    var cfpass = document.getElementById("cfpassword").value;
    var erCf = document.getElementById("errCf");
    var user = {
        username: username,
        email: email,
        password: password,
        cfpass : cfpass
    }
    var json = JSON.stringify(user);
    
    if (username == "" || email == "" || password == "" || cfpass =="")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    if(username!=""){
        if(!isNaN(username)){
            document.querySelector("#username").classList.add("err-input");
            erUser.classList.add("err-text");
            erUser.innerHTML = "Tên tài khoản không hợp lệ!!!";
            return username
        }
        else
        {
            document.querySelector("#username").classList.remove("err-input")
            erUser.innerHTML = "";
        }
        
    }
    if(email!=""){
        if(!rgexEmail.test(email)){
            document.querySelector("#email").classList.add("err-input")
            erEmail.classList.add("err-text")
            erEmail.innerHTML = "Gmail không hợp lệ!!!";
        }
        else
        {document.querySelector("#email").classList.remove("err-input")
            erEmail.innerHTML="";
        }
    }
   
    if(password != ""){
        if(!rgexPass.test(password)){
            document.querySelector("#password").classList.add("err-input")
            erPass.classList.add("err-text")
            erPass.innerHTML = "Mật khẩu không hợp lệ!!!Phải từ 8 số trở lên";
        }
        else
       {
        document.querySelector("#password").classList.remove("err-input")
        erPass.innerHTML="";
       }
    }
    
    if(cfpass!=""){
        if(cfpass!=password){
            document.querySelector("#cfpassword").classList.add("err-input")
            erCf.classList.add("err-text")
            erCf.innerHTML = "Mật khẩu không trùng khớp!!!";
        }
        else
      {
        document.querySelector("#cfpassword").classList.add("err-input")
        erCf.innerHTML = "";
      }
    }
   
    if(rgexUsername.test(username)&&rgexPass.test(password)&&cfpass==password&&rgexEmail.test(email)){
        alert("Đăng kí thành công!!");
        window.location.href = "trang-chu.html";
        localStorage.setItem("user", json)
    }
}

