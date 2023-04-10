function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var use = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(use);
    localStorage.setItem(username, json)
    if (username == "" || email == "" || password == "")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    else {
        alert("Đăng kí thành công!!");
        window.location.href = "login.html";
    }
}

function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username)
    var data = JSON.parse(user);
    if (username == "" || email == "" || password == "")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    else if (user == null)
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
    else if (username == data.username && email == data.email && password == data.password) {
        alert("Đăng nhập thành công ");
        window.location.href = "trang-chu-da-dangki.html";
    } else
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
}