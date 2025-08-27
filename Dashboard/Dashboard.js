const humburgerIcon = document.querySelector(".leftssidehead");
      const leftsideNaviagtionBar = document.querySelector(".LeftSIdeNavigationBar");
      const iconName = document.querySelectorAll(".iconholder h3");
      const header = document.querySelector(".header");
      const profileMinue = document.querySelector(".profile_minue");
      const profile = document.querySelector(".profile");
      const body = document.querySelector(".adminDashBoarder");
      const table = document.getElementById("table");
      const addmember = document.getElementById("AddMebberButton");
      const insertInfromation = document.querySelector(".insertInformation");
      const sumbitBtn = document.getElementById("submite");
      const closeBtn = document.querySelector(".closeBtn");
      let foundAmount = document.querySelector(".money");
      let tottalAmount = 0;
      const userNumber = document.querySelector(".numbers");
      let totalUser = 0;
      let editRow = null;

      humburgerIcon.addEventListener("click", () =>{
       if (leftsideNaviagtionBar.style.width === "50px"){
        leftsideNaviagtionBar.style.width = "200px";
        iconName.forEach(h3 => h3.style.opacity = "1");
        header.style.width = "82%";
        body.style.width = "81.7%";
       } else{
        leftsideNaviagtionBar.style.width = "50px";
        iconName.forEach(h3 => h3.style.opacity = "0");
        header.style.width = "93.5%";
        body.style.width = " 92.5%";
       }
      })

      profile.addEventListener("click", ()=>{
        if(profileMinue.style.display === "none"){
          profileMinue.style.display = "flex"
        } else {
          profileMinue.style.display = "none";
        }
      })
      addmember.addEventListener("click", () => {
        if(insertInfromation.style.display === "none"){
          insertInfromation.style.display = "flex"
        } else {
          insertInfromation.style.display = "none"
        }
      })
      sumbitBtn.addEventListener("click", () =>{
        const table = document.getElementById("table");
        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lname").value;
        let id = document.getElementById("id").value;
        let email = document.getElementById("email").value;
        let found = parseInt(document.getElementById("found").value);
        let adress = document.getElementById("adress").value;
        tottalAmount += found;

       

        if(name === "" || lastName === "" || id === "" || email ==="" || found ==="" || adress === ""){
          alert("Fill the Gaps") 
          return
        } else{
          const NewRow = table.insertRow(-1);
          NewRow.insertCell(0).innerText = table.rows.length-1;
          NewRow.insertCell(1).innerText = name;
          NewRow.insertCell(2).innerText = lastName;
          NewRow.insertCell(3).innerText = id;
          NewRow.insertCell(4).innerText = email;
          NewRow.insertCell(5).innerText = `${found}$`;
          NewRow.insertCell(6).innerText = adress;
          NewRow.insertCell(7).innerHTML = `<button onclick = "Edit(this)" id = "edit">Edite</button>
          <button onclick = "DeleteRow(this)"  id = "delete">Delete</button>
          `;
          foundAmount.innerText = `${tottalAmount}$`
          userNumber.innerText = `${table.rows.length-1}`
          document.getElementById("name").value = "";
          document.getElementById("lname").value = "";
          document.getElementById("id").value = "";
          document.getElementById("email").value = "";
          document.getElementById("found").value = "";
          document.getElementById("adress").value = "";
        } 
      })
      closeBtn.addEventListener("click", () =>{
        if(insertInfromation.style.display === "none"){
          insertInfromation.style.display = "flex";
        } else {
          insertInfromation.style.display = "none";
        }
      });
      function DeleteRow(button){
        const row = button.closest("tr");
        const cells = row.cells;
        let foundValue = parseInt(cells[5].innerText.replace("$", "")) || 0;
        tottalAmount -= foundValue;
        let index = parseInt(cells[0].innerText);
      
        foundAmount.innerText = tottalAmount;
        row.remove();
       
        const table = document.getElementById("table");
        for(let i = 1; i < table.rows.length; i++){
    table.rows[i].cells[0].innerText = i;
   
  }
  userNumber.innerText = `${table.rows.length-1}`;
      }

  function Edit(button){
    editRow = button.closest("tr");
    const cells = editRow.cells;
    document.getElementById("name").value = cells[1].innerText;
    document.getElementById("lname").value = cells[2].innerText;
    document.getElementById("id").value = cells[3].innerText;
    document.getElementById("email").value = cells[4].innerText;
    document.getElementById("found").value = parseInt(cells[5].innerText.replace("$", ""));
    document.getElementById("adress").value = cells[6].innerText;
    insertInfromation.style.display = "flex";
  }

  const updatebtn = document.getElementById("update");
  updatebtn.addEventListener("click", () =>{
    if(!editRow) return;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lname").value;
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let found = parseInt(document.getElementById("found").value) || 0;
    let adress = document.getElementById("adress").value;

    let oldfund = parseInt(editRow.cells[5].innerText.replace("$", "")) || 0;
    tottalAmount = tottalAmount - oldfund + found;
    foundAmount.innerText = `${tottalAmount}`;

  editRow.cells[1].innerText = name;
  editRow.cells[2].innerText = lastName;
  editRow.cells[3].innerText = id;
  editRow.cells[4].innerText = email;
  editRow.cells[5].innerText = `${found}$`;
  editRow.cells[6].innerText = adress;

  editRow = null;
  document.getElementById("name").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("id").value = "";
  document.getElementById("email").value = "";
  document.getElementById("found").value = "";
  document.getElementById("adress").value = "";
  })