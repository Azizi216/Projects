const name = document.getElementById("name");
const age = document.getElementById("age");
const city = document.getElementById("city");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const post = document.getElementById("post");
const start_Date = document.getElementById("s-date");
const SubmitBtn = document.getElementById("SubmitBtn");
const profileImg = document.getElementById("Profile-img");
const addItmebtn = document.querySelector(".New-User");
const form = document.querySelector(".fill-the-form");
const closingfrom = document.getElementById("closing")

addItmebtn.addEventListener("click", () =>{
  if (form.style.display ==="none"){
    form.style.display = "block";
    document.body.style.background = "rgba(0,0,0,0.5)"
  } else{
    form.style.display = "none"
  }
})
closingfrom.addEventListener("click", () =>{
  if(form.style.display === "block"){
    form.style.display = "none"
    document.body.style.background = "rgba(0,0,0,0)"
  }
})


 const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function () {
const file = fileInput.files[0];
if (file) {
profileImg.src = URL.createObjectURL(file);
  }
  });



SubmitBtn.onclick = function(){
  let nameVal = name.value;
  let ageVal = age.value;
  let cityVal = city.value;
  let emailVal = email.value;
  let phoneVal = phone.value;
  let postval = post.value;
  let start_DateVal= start_Date.value;
  let imgeFile = document.getElementById("fileInput").files[0];
  if(nameVal ==="" || ageVal ==="" || emailVal ==="" || cityVal === "" || phoneVal ==="" || postval ==="" || start_DateVal ===""){
    alert("please fill the gaps");
    return 0;
  }
  const table = document.getElementById("table");
  if(window.editingRow){
    const cells = window.editingRow.getElementsByTagName("td");

    const img = cells[1].querySelector("img");
    if(imgeFile) {
      img.src = URL.createObjectURL(imgeFile);
    }
    cells[2].innerHTML = nameVal;
    cells[3].innerHTML = ageVal;
    cells[4].innerHTML = cityVal;
    cells[5].innerHTML = emailVal;
    cells[6].innerHTML = phoneVal;
    cells[7].innerHTML = postval;
    cells[8].innerHTML = start_DateVal;
    
    window.editingRow = null;
    SubmitBtn.textContent = "Submit"
  } else{
    const NewRow = table.insertRow(-1);
 
 const imgElement = document.createElement("img");
 imgElement.style.width = "50px"
 imgElement.style.height = "50px"
 imgElement.style.objectFit = "cover"
 if(imgeFile) {
  imgElement.src = URL.createObjectURL(imgeFile);
 } else {
  imgElement.src = "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
 }
 NewRow.insertCell(0).innerText = table.rows.length - 1;
 NewRow.insertCell(1).appendChild(imgElement);
 NewRow.insertCell(2).innerText = nameVal;
 NewRow.insertCell(3).innerText = ageVal;
 NewRow.insertCell(4).innerText = cityVal;
 NewRow.insertCell(5).innerText = emailVal;
 NewRow.insertCell(6).innerText = phoneVal;
 NewRow.insertCell(7).innerText = postval;
 NewRow.insertCell(8).innerText = start_DateVal;
 NewRow.insertCell(9).innerHTML = `
            <button class = "edit" onclick = "editRow(this)">Edit </button>
            <button class = "delete" onclick = "deleteRow(this)">Delete</button>`;
  }
  
name.value = "";
age.value = "";
city.value = "";
email.value = "";
phone.value = "";
post.value = "";
start_Date.value = "";
}

function editRow(buton){
  const row = buton.closest("tr");
  window.editingRow = row;
  const cells = row.getElementsByTagName("td"); // ✅ add the missing "s"

  const img = cells[1].querySelector("img").src;
  profileImg.src= img;
  name.value = cells[2].innerText;
  age.value = cells[3].innerText;
  city.value = cells[4].innerText;
  email.value = cells[5].innerText;
  phone.value = cells[6].innerText;
  post.value = cells[7].innerText;
  start_Date.value = cells[8].innerText;
  form.style.display = "block"
  document.body.style.background = "rgba(0,0,0,0.5)";
  SubmitBtn.textContent = "update";
}
function deleteRow(buton){
  const row = buton.closest("tr");
  row.remove();
  const table = document.getElementById("table");
  for(let i = 1; i < table.rows.length; i++){
    table.rows[i].cells[0].innerText = i;
  } 
}
