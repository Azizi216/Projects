const currentMoney = document.getElementById("currentMoney");
const changedMoney = document.getElementById("changedmoney");
const convertbtn = document.getElementById("convertBtn");
let display = document.querySelector(".displayer");
let input = document.getElementById("input");
async function loadCurencies() {
  let res = await fetch("https://open.er-api.com/v6/latest/USD");
  let data = await res.json();
  let currecies = Object.keys(data.rates);
  currecies.forEach(code =>{
    let option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    
    let option2 = option1.cloneNode(true);
    
    currentMoney.appendChild(option1);
    changedMoney.appendChild(option2);
  })
  currentMoney.value = "USD";
  changedMoney.value = "EUR";
}

convertbtn.addEventListener("click", async () =>{
  let amount = parseFloat(input.value);
  let from = currentMoney.value;
  let to = changedMoney.value;
  if(isNaN(amount)){
    display.innerText = "Enter  a valid number";
    return
  }
 let res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
 let data = await res.json();
 let rate = data.rates[to];
 let result = amount * rate;
 display.innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;

});
loadCurencies();