const Income = document.getElementById("");
const addbtn = document.getElementById("adding");
const belance = document.getElementById("Upper-balance");
let belanceValue = 0;

let incomeValue = 0;
let expensesValue = 0;
addbtn.addEventListener("click", () =>{

  const Description = document.getElementById("Description").value;
  const Amount = parseInt(document.getElementById("Amount").value);
  const exprense = document.createElement("div");
  exprense.classList.add("ExTransaction");
  const things = document.createElement("p");
  const amontval = document.createElement("p");
  amontval.textContent = `${Amount}$`;
  
  const incomeShower = document.getElementById("incomeSower");
  const expensesShower = document.getElementById("ExpenseShower");
  if(Amount > 0){
    exprense.style.borderColor = "green";
    incomeValue += Amount;
    incomeShower.textContent = `${incomeValue}`


  } else {
    exprense.style.borderColor = "red";
    expensesValue += Amount;
    expensesShower.textContent = `${expensesValue}`
  }  
  belanceValue += Amount;

  belance.textContent = `${belanceValue}`
  
  things.textContent = Description;
  
  const statsHolder = document.querySelector(".leftside").appendChild(exprense)
 // exprense.appendChild(things);
 exprense.append(things, amontval);



  console.log(Amount)

})