$("#btn-login").click(function () {
    var username = $('#inputUsername').val();
    var password = $('#inputPassword').val();
    console.log("username = " + username, "password = " + password);
    $.ajax({
        method: "POST",
        url: "http://localhost:3001/login",
        data: { username: username, password: password },
        //headers: { "Authorization": localStorage.getItem('token') }
    }).done(function (msg) {

        if (msg.login) {
            alert("Notification: " + msg.message);
            localStorage.setItem("token", msg.accessToken);
            window.location.href = "/index.html";
        } else {
            alert("Notification: " + msg.message);
            localStorage.setItem("token", "");
        }
    });
    return false;
});
