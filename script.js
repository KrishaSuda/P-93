function addUser(){
    UserName = document.getElementById("user_name").value;
    localStorage.setItem("username", UserName);
    window.location = "kwitter_room.html"
}