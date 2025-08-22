 // ✅ Your Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyDuWYysglI8tp3ON9865sG8Dclvmd4b_7Y",
      authDomain: "community-e81ae.firebaseapp.com",
      databaseURL: "https://community-e81ae-default-rtdb.firebaseio.com",
      projectId: "community-e81ae",
      storageBucket: "community-e81ae.appspot.com",
      messagingSenderId: "310955017003",
      appId: "1:310955017003:web:9fb62f4fa8301c45f7bb6e"
    };
  
    // ✅ Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
  
    const sendBtn = document.getElementById("sendbtn");
    const chatInput = document.getElementById("chat");
    const chatHolder = document.getElementById("chatHolder");
    const currentUser = JSON.parse(localStorage.getItem("chatUser"));
    const people_holder = document.querySelector(".people_holder");
    const headerProfile = document.querySelector(".middleheader img");
    const profile_name = document.querySelector(".middleheader p");
    const profile = document.querySelector(".uppperSide img");
    const profileName = document.querySelector(".uppperSide h3");
    const profileParagraph = document.querySelector(".uppperSide p");

        // 🔹 Set my profile info (right panel)
    profile.src = currentUser.avatar || "default.png";
    profileName.textContent = currentUser.name;
    profileParagraph.textContent = `Hey, there I am ${currentUser.name} using chatapp.`;

    // 🔹 Set header profile
    headerProfile.src = currentUser.avatar || "default.png";
    profile_name.textContent = currentUser.name;


    const addedUser = new Set()
    
    // 🔹 Send a message
    function sendMessage() {
      let chat = chatInput.value.trim();
      if (chat !== "") {
        db.ref("messages").push({
          text: chat,
          time: Date.now(),
          name: currentUser.name,
          email: currentUser.email,
          avatar: currentUser.avatar
        });
        chatInput.value = "";
      }
    }
  
    sendBtn.addEventListener("click", sendMessage);
  
    // 🔹 Send on Enter (Shift+Enter makes new line)
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  
    // 🔹 Listen for messages in real time
    db.ref("messages").on("child_added", (snapshot) => {
      const user = snapshot.val();
      const msg = snapshot.val();
  
      // create wrapper
      let wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.gap = "10px";
      wrapper.style.alignItems = "flex-start";
      wrapper.style.margin = "8px 0";

      // Avatar

      let avatarImg = document.createElement("img");
      avatarImg.src = msg.avatar || "default.png";
      avatarImg.style.width = "40px";
      avatarImg.style.height = "40px"
      avatarImg.style.borderRadius = "50%";
      avatarImg.style.objectFit = "cover";

      let message_div = document.createElement("div");
      message_div.style.width = "fit-content";
      message_div.style.maxWidth = "70%";
      message_div.style.padding = "10px";
      message_div.style.margin = "5px";
      message_div.style.borderRadius = "1rem";

      // Message bubble

      let bubble = document.createElement("div");
      bubble.style.padding = "10px";
      bubble.style.borderRadius = "12px";
      bubble.style.maxWidth = "70%"
  
      // Different style if it's "my" message
      if(msg.email ===currentUser.email) {
        wrapper.style.justifyContent = "flex-end";
        bubble.style.background = "lightgreen";
      } else{
        wrapper.style.justifyContent = "flex-start";
        bubble.style.background = "lightblue";
      }

      let nameTag = document.createElement("strong");
      nameTag.textContent = msg.name + ":";
      let text = document.createElement("span");
      text.textContent = msg.text;

  
      bubble.appendChild(nameTag);
      bubble.appendChild(text);

      wrapper.appendChild(avatarImg);
      wrapper.appendChild(bubble);

      chatHolder.appendChild(wrapper)
      chatHolder.scrollTop = chatHolder.scrollHeight; // auto-scroll
    });

    db.ref("messages").on("child_added", (snapshot) =>{
      const user = snapshot.val();
      if (addedUser.has(user.email) || user.email === currentUser.email){
        return;
      }
      addedUser.add(user.email);

      let person = document.createElement("div");
      person.classList.add("people");
      
      let avatar = document.createElement("img");
      avatar.src = user.avatar || "default.png";

      let name = document.createElement("p");
      name.textContent = user.name;
      person.appendChild(avatar);
      person.appendChild(name);
      people_holder.appendChild(person);

      
    });