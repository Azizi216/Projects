let Nameval = document.getElementById("name");
let AgeVal = document.getElementById("age");
let EmailVal = document.getElementById("Email");
let AdressVal = document.getElementById("adress");
let AddBtn = document.getElementById("AddBtn");
let UpdateBtn = document.getElementById("Update");



let selectedRow = null;

AddBtn.onclick = function(){
let Name = Nameval.value;
let Age = AgeVal.value;
let Email = EmailVal.value;
let Adress = AdressVal.value;
 if(Name ==="" || Age ==="" || Adress === "" || Email ===""){
   alert("please fill the gaps!")
 }
const table = document.getElementById("table");
const NewRow = table.insertRow(-1);


NewRow.insertCell(0).innerText = Name; 
NewRow.insertCell(1).innerText = Age;
NewRow.insertCell(2).innerText = Adress;
NewRow.insertCell(3).innerText =  Email;
const ActionsCell = NewRow.insertCell(4);
AdressVal.innerText = "";
ActionsCell.innerHTML = `
<button class = "edit" onclick = "editRow(this)">Edit </button>
<button class = "delete" onclick = "deleteRow(this)">Delete</button>
`;
Nameval.value = "";
AgeVal.value = "";
AdressVal.value = "";
EmailVal.value = "";


}
function editRow(button) {
 selectedRow = button.parentElement.parentElement;
 Nameval.value = selectedRow.cells[0].innerText;
 AgeVal.value = selectedRow.cells[1].innerText;
 AdressVal.value = selectedRow.cells[2].innerText;
 EmailVal.value = selectedRow.cells[3].innerText;
 UpdateBtn.style.display = "inline-Block";
 AddBtn.style.display = "none"

}
function deleteRow(button) {
 const row = button.parentElement.parentElement;
 table.deleteRow(row.rowIndex)
}

UpdateBtn.onclick =function () {
 if(selectedRow) {
   selectedRow.cells[0].innerText = Nameval.value;
   selectedRow.cells[1].innerText = AgeVal.value;
   selectedRow.cells[2].innerText = AdressVal.value;
   selectedRow.cells[3].innerText = EmailVal.value;
   selectedRow = null;
   UpdateBtn.style.display ="none"
   AddBtn.style.display = "inline-block"
Nameval.value = "";
AgeVal.value = "";
AdressVal.value = "";
EmailVal.value = "";
 }
}
