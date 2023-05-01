function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var rgexUsername = /^[a-zA-Z0-9]{6,}$/;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json)
    if (username == "" || email == "" || password == "")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    else if(!rgexUsername.test(username)){
        alert("k hop le");
    }
    else if(){
        
    }
    else {
        alert("Đăng kí thành công!!");
        window.location.href = "trang-chu.html";
    }
}

