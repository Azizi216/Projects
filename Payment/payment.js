const CardNumber = document.getElementById("cardNumber");
      const CardHolder = document.getElementById("CardHolder");
      const month = document.getElementById("month");
      const Year = document.getElementById("Year");
      const CVV = document.getElementById("CVV");
      const CardHolderName = document.getElementById("CardHolderName");
      const CardNUmberDisplay = document.getElementById("cardNUmberDisplay");
      const expireDisplay = document.getElementById("expireDisplay");
      const SubmitBtn = document.getElementById("submitbtn");
      const cvvDisplay  = document.querySelector(".cvvHolder");
      const cardBothside= document.querySelector(".cardBothSide")

      const currentYear = new Date().getFullYear();
      const startYear = 2000;
      const endYear = 2027;
      for(let year = startYear; year <= endYear; year++){
        const option2 = document.createElement("option");
        option2.value = year;
        option2.textContent = year;
        Year.appendChild(option2);
      }

      for (let i = 1; i <= 12; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i.toString().padStart(2, "0");
        month.appendChild(option);
      }
      CardHolder.addEventListener("input", () =>{
        CardHolderName.textContent = CardHolder.value || "NAME";
      })
      CardNumber.addEventListener("input", () =>{
        CardNUmberDisplay.textContent = CardNumber.value || "*******************" 
      })

      function expirdate(){
        const mm = month.value.toString().padStart(2, "0");
        const yy = Year.value.toString();
        expireDisplay.textContent = `${mm} ${yy}`
      }
        month.addEventListener("change", expirdate);
        Year.addEventListener("change", expirdate);
        SubmitBtn.addEventListener("click", () =>{
        CardNUmberDisplay.textContent = CardNumber.value || "*******************" ;
        CardHolderName.textContent = CardHolder.value || "NAME";
        const mm = month.value.toString().padStart(2, "0");
        const yy = Year.value.toString();
        expireDisplay.textContent = `${mm} ${yy}`
      })
      CVV.addEventListener("focus", () => {
        cardBothside.classList.add("flip");
        cvvDisplay.textContent = CVV.value;
      })
      CVV.addEventListener("blur", () => {
        cardBothside.classList.remove("flip");

      })
      CVV.addEventListener("input", () => {
  cvvDisplay.textContent = CVV.value;
});