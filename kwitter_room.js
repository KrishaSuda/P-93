  var firebaseConfig = {
    apiKey: "AIzaSyBDR-cdgMkxgnKGBwxFiIvJFgz9DfAJegU",
    authDomain: "kwitter-99363.firebaseapp.com",
    databaseURL: "https://kwitter-99363-default-rtdb.firebaseio.com",
    projectId: "kwitter-99363",
    storageBucket: "kwitter-99363.appspot.com",
    messagingSenderId: "395037261855",
    appId: "1:395037261855:web:379be2a5c6671d411c552a",
    measurementId: "G-SJW07EFCJW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
console.log(user_name)
document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!"

function addRoom() {
  room_name = document.getElementById("room_name").value;
  console.log(room_name)
  firebase.database().ref("/").child(room_name).update({
    RoomName: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function getData() {
  console.log("getData")
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'><h4>#" + Room_names + "</h4></div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData()
