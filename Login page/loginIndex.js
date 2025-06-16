 const display = document.getElementById("Display")
      const Password = document.querySelector(".js-password-input")
      let my_password = Password.value;
      const confrim = document.querySelector(".js-pssword-confirm")
      let confirm_password = confrim.value

      function check(){
        const Display = document.getElementById("Display")
        const Result = document.getElementById("Result")
        let my_password = Password.value;
        let confirm_password = confrim.value
        let im_icon = document.getElementById("img")

        if(my_password === confirm_password & my_password.length > 0){
          console.log("correct")
          Display.style.display = "block"; 
          display.style.display = "flex"
          Display.style.background = " rgb(13, 212, 46)"
          Result.innerHTML = `MATCH`
          im_icon.src = "https://cdn-icons-png.flaticon.com/512/2550/2550322.png"
        } else{
          console.log("Not correct")
          Display.style.display = "none"; 
          Display.style.display = "block"; 
          display.style.display = "flex"
          Display.style.background = "white"
          Result.innerHTML = `NOT MATCH`
          im_icon.src = "https://images.emojiterra.com/microsoft/fluent-emoji/15.1/1024px/1f6ab_flat.png";
        }
      }
      let show = document.getElementById("psswordF")
      let Eyeicon = document.getElementById("eyeicon")
     Eyeicon.onclick = function(){
      if(show.type =="password"){
        show.type = "text"
        Eyeicon.src = "images/eye-open.png"
      } else{
        show.type = "password"
        Eyeicon.src = "images/eye-close.png"
      }
      }

      let downButton = document.getElementById("downbutton")
      let = downinput = document.getElementById("downinput")

      downButton.onclick = function(){
        if(downinput.type == "password"){
          downinput.type = "text"
          downButton.src = "images/eye-open.png"

        } else{
          downinput.type = "password"
          downButton.src = "images/eye-close.png"
        }
      }