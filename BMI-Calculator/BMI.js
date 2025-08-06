const weight = document.getElementById("weight");
const hight = document.getElementById("hight");
let result = document.getElementById("result");
const SubmitBtn = document.getElementById("Submit");
let healthCatagory = document.getElementById("Helath");
const reset = document.getElementById("reset");
const aboutbtn = document.querySelector(".aboutbtn");
const about = document.querySelector(".about");
SubmitBtn.addEventListener("click", () =>{
  let hightVal = parseInt(hight.value)/100;
  let widthVal = parseInt(weight.value);
  if(hightVal ==="" || widthVal ===""){
    alert("please fill the gaps");
  
  }
 
  let BMIresult = widthVal/(hightVal**2);
  let rounded = parseFloat(BMIresult.toFixed(2));
  result.innerText = rounded
  if(BMIresult > 18.5 && BMIresult < 25){
    healthCatagory.innerHTML = `You are <span style = " font-weight:700;">healthy</span>`
  } else if(BMIresult < 18.5){
    healthCatagory.innerHTML = `You are <span style = " font-weight:700;">Underweight</span>`
  }
  else if(BMIresult > 25.5 && BMIresult < 29.9){
    healthCatagory.innerHTML = `You are <span style = " font-weight:700;">OverWight</span>`
  } 
  else if(BMIresult > 29.9){
    healthCatagory.innerHTML = `You are <span style = " font-weight:700;">Obese</span>`
  }
})
reset.addEventListener("click", () =>{
  weight.value = "";
  hight.value = "";
  healthCatagory.innerText = "You are";
  result.innerText = "Re.."
  
})
aboutbtn.addEventListener("click", () => {
  if(about.style.display === "none"){
    about.style.display = "block";
  } else{
    about.style.display = "none";
  }
})