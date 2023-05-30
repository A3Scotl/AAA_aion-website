function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem("user")
    var data = JSON.parse(user);
    var rexname  = '/^[a-zA-Z0-9]{6,32}+$/';
    if (username == "" || email == "" || password == "")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    else if (user == null)
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
    else if (username == data.username && email == data.email && password == data.password) {
        alert("Đăng nhập thành công ");
        window.location.href = "trang-chu.html";
    } else
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
}