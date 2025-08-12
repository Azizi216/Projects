const Registerbtn = document.getElementById("Register");
      const UpdateBtn = document.getElementById("update");
      const form = document.querySelector(".RegistrationDiv");
      const table = document.getElementById("table")
      const preview = document.getElementById("preview");
      const imgInput = document.getElementById("inputed_img");
      let selectedRow = null;
      imgInput.addEventListener("change", () => {
        const file = imgInput.files[0];
        if(file){
          preview.src = URL.createObjectURL(file);
        }
      })
      
      Registerbtn.addEventListener("click", () =>{
        const Name = document.getElementById("Name").value;
        const Id = document.getElementById("id").value;
        const LastName = document.getElementById("LastName").value;
        const Email = document.getElementById("Email").value;
        const officeCode = document.getElementById("Office_code").value;
        const JobeTitile = document.getElementById("JobeTitle").value;
        const imgfile = document.getElementById("inputed_img").files[0];

        if(Name ==="" || Id ==="" || LastName === "" || Email === "" || officeCode ==="" || JobeTitile ===""){
          alert("Please Fill the Gaps")
        }
        
        const imgElemt = document.createElement("img");
        imgElemt.style.width = "40px";
        imgElemt.style.height = "40px";
        imgElemt.style.objectFit = "cover";

        if(imgfile){
          imgElemt.src = URL.createObjectURL(imgfile);
        } else{
          imgElemt.src = "https://www.freeiconspng.com/thumbs/person-icon-blue/person-icon-blue-18.png";
        }

        const newRow = table.insertRow(-1);
        newRow.insertCell(0).innerText = table.rows.length - 1;
        newRow.insertCell(1).appendChild(imgElemt);
        newRow.insertCell(2).innerText = Id;
        newRow.insertCell(3).innerText = Name;
        newRow.insertCell(4).innerText = LastName;
        newRow.insertCell(5).innerText = Email;
        newRow.insertCell(6).innerText = officeCode;
        newRow.insertCell(7).innerText = JobeTitile;
        newRow.insertCell(8).innerHTML = `<button class = "see"> <img src = "https://icon-library.com/images/white-eye-icon/white-eye-icon-3.jpg"> </button> <button class = "delete" onclick = "DeleteRow(this)"> <img id = "delete-Icon" src  = "https://img.icons8.com/m_rounded/512/FFFFFF/filled-trash.png"> </button> 
        
        `;
        document.getElementById("id").value = "";
        document.getElementById("Name").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Office_code").value = "";
        document.getElementById("JobeTitle").value = "";
        preview.src = "https://www.freeiconspng.com/thumbs/person-icon-blue/person-icon-blue-18.png";
      })
      const closing_btn = document.querySelector(".closing");
      const opnebtn = document.getElementById("addingBtn");
      closing_btn.addEventListener("click", () =>{
          form.style.display = "none"
      })
      opnebtn.addEventListener("click", () =>{
        if(form.style.display ==="none"){
          form.style.display = "block";
          form.style.display = "flex";
        }else{
          form.style.display = "none"
        }
      })
      table.addEventListener("click", function(e){
        if(e.target.closest(".see")){
          const row = e.target.closest("tr");
          
          const id = row.cells[2].innerText;
          const name = row.cells[3].innerText;
          const LastName = row.cells[4].innerText;
          const Email= row.cells[5].innerText;
          const officeCode = row.cells[6].innerText;
          const JobeTitile = row.cells[7].innerText;
          const ProfileImgsrc = row.cells[1].querySelector("img").src;

          document.getElementById("id").value = id;
          document.getElementById("Name").value = name;
          document.getElementById("LastName").value = LastName;
          document.getElementById("Email").value = Email;
          document.getElementById("Office_code").value = officeCode;
          document.getElementById("JobeTitle").value = JobeTitile;
          preview.src = ProfileImgsrc;
          form.style.display = "flex"
          selectedRow = row;
        }
      })
      UpdateBtn.addEventListener("click", function(){
        if(!selectedRow) return;
          selectedRow.cells[2].innerText = document.getElementById("id").value;
          selectedRow.cells[3].innerText = document.getElementById("Name").value;
          selectedRow.cells[4].innerText = document.getElementById("LastName").value;
          selectedRow.cells[5].innerText = document.getElementById("Email").value;
          selectedRow.cells[6].innerText = document.getElementById("Office_code").value;
          selectedRow.cells[7].innerText = document.getElementById("JobeTitle").value;

          // update img
          const imgfile = document.getElementById("inputed_img").files[0];
          const imgElemt  = selectedRow.cells[1].querySelector("img");
          if(imgfile){
            imgElemt.src = URL.createObjectURL(imgfile);
          } else{
            imgElemt.src = preview.src;
          }
          form.style.display = "none"
        
        selectedRow = null;
      })

      function DeleteRow(button){
        const row = button.closest("tr");
        row.remove();
        const table = document.getElementById("table");
        for(let i = 1; i < table.rows.length; i++){
    table.rows[i].cells[0].innerText = i;
  }
      }
      document.getElementById("searchBox").addEventListener("keyup", function(){
        let filter = this.value.tolowerCase();
        let rows = table.getElementsByTagName("tr");
        for(let i = 1; i < row.length; i++){
          let cells = rows[i].getElementsByTagName("td");
          let match = false;
          for (let j = 0; j < cells.length; j++){
            let text = cells[j].innerText.toLocaleLowerCase();
            if(text.includes(filter))
            match = true;
            break;
          }
        }
        rows[i].style.display = match? "" :"none";
      
      })