const firebaseConfig = {
  apiKey: "AIzaSyDuWYysglI8tp3ON9865sG8Dclvmd4b_7Y",
  authDomain: "community-e81ae.firebaseapp.com",
  databaseURL: "https://community-e81ae-default-rtdb.firebaseio.com",
  projectId: "community-e81ae",
  storageBucket: "community-e81ae.appspot.com",
  messagingSenderId: "310955017003",
  appId: "1:310955017003:web:9fb62f4fa8301c45f7bb6e"
};

const imgShow = document.querySelector(".imgShow");
const avatarsDiv = document.querySelector(".avatars");
const avatarsImg = document.querySelectorAll(".AvatarsImages img");
let SelectedAvatar = "chatAvartar/male-18.png";
imgShow.addEventListener("click", () =>{
  avatarsDiv.style.display = "grid"
})
avatarsImg.forEach(img =>{
  img.addEventListener("click", () =>{
    SelectedAvatar = img.src;
    document.querySelector(".imgShow img").src = SelectedAvatar;
    avatarsDiv.style.display = "none";
        })
}) 

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function login() {

  const name = document.getElementById("Name").value;
const email = document.getElementById("Email").value;
if(name ==="" || email === ""){
  alert("plase enter both name and email");
  return;
}  
const userRef = db.ref("user").push();
userRef.set({
  name: name,
  email: email,
  avatar: SelectedAvatar
});
localStorage.setItem("chatUser", JSON.stringify({name, email, avatar : SelectedAvatar}));
window.location.href = "chatApp.html";
}